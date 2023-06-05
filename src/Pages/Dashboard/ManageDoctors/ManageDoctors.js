import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProgressLoading from "../../../Components/ProgressLoading/ProgressLoading";

const ManageDoctors = () => {
  const { data: doctors=[], isLoading } = useQuery({
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
                  <td><button className="btn btn-sm">Delete</button></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
