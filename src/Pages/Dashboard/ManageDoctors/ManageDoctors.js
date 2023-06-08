import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ProgressLoading from "../../../Components/ProgressLoading/ProgressLoading";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import { toast } from "react-hot-toast";

const ManageDoctors = () => {
  const [deleteDoctor, setDeleteDoctor] = useState(null);

  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const cancelDeleting = () => {
    return setDeleteDoctor(null);
  };

  const removeDoctor = (id) => {
    fetch(`http://localhost:5000/doctors/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Successfully removed");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <ProgressLoading />;
  }

  return (
    <div>
      <h1 className="text-xl font-bold my-4">
        Manage Doctors: {doctors?.length}
      </h1>

      <div className="w-full">
        <table className="table w-full lg:w-11/12">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors &&
              doctors.map((doctor, i) => (
                <tr key={doctor._id}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img src={doctor.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>{doctor.specialty}</td>
                  <td>
                    <label
                      onClick={() => setDeleteDoctor(doctor)}
                      htmlFor="my_modal_6"
                      className="btn btn-sm">
                      Remove
                    </label>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {deleteDoctor && (
        <ConfirmationModal
          title={`Are you sure you want to remove '${deleteDoctor.name}'?`}
          message={`If you remove '${deleteDoctor.name}', it cannot be undone.`}
          cancelDeleting={cancelDeleting}
          removeDoctor={removeDoctor}
          deleteDoctor={deleteDoctor}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
