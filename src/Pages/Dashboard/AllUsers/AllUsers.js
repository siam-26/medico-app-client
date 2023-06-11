import { useQuery } from "@tanstack/react-query";
import React from "react";
import ProgressLoading from "../../../Components/ProgressLoading/ProgressLoading";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://medico-care-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const handleAdmin = (id) => {
    fetch(`https://medico-care-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successful");
          refetch();
        }
      });
  };

  const handleUserDelete = (id) => {
    fetch(`https://medico-care-server.vercel.app/users/admin/delete/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Successfully deleted!");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <ProgressLoading />;
  }

  return (
    <div>
      <h2 className="text-xl font-bold my-4">All Users</h2>

      <div className="w-full">
        <table className="table w-full lg:w-11/12">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUsers &&
              allUsers.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user?.role !== "admin" && (
                      <button
                        onClick={() => handleAdmin(user._id)}
                        className="btn btn-xs btn-primary">
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleUserDelete(user._id)}
                      className="btn btn-xs">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
