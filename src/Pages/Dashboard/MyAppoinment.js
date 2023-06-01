import React, { useContext } from "react";
import { AuthContext } from "../../Context Api/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import ProgressLoading from "../../Components/ProgressLoading/ProgressLoading";

const MyAppoinment = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/myAppoinment?email=${user?.email}`;

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["myAppoinment", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <ProgressLoading/>
  }

  return (
    <div className="w-full">
      <table className="table w-full lg:w-11/12">
        {/* head */}
        <thead className="">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {bookings &&
            bookings.map((book, i) => (
              <tr key={book._id}>
                <th>{i+1}</th>
                <td>{book.patient}</td>
                <td>{book.treatment}</td>
                <td>{book.appoinmentDate}</td>
                <td>{book.slot}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppoinment;
