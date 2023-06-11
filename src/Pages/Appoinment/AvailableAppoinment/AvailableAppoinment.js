import { format } from "date-fns";
import React, { useContext, useState } from "react";
import AvailableOption from "./AvailableOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context Api/AuthProvider";
import { Link } from "react-router-dom";

const AvailableAppoinment = ({ selectedDate }) => {
  const { user } = useContext(AuthContext);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const {
    data: appoinmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appoinmentOptions", date],
    queryFn: () =>
      fetch(`https://medico-care-server.vercel.app/appoinmentOptions?date=${date}`).then(
        (res) => res.json()
      ),
  });

  return (
    <section className="mt-16 lg:mt-24 flex justify-center md:block">
      <div>
        <p className="text-center font-semibold mb-12">
          Available Services on{" "}
          <span className="text-secondary font-bold">
            {format(selectedDate, "PP")}
          </span>
        </p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {appoinmentOptions?.map((option) => (
            <AvailableOption
              key={option._id}
              option={option}
              setTreatment={setTreatment}></AvailableOption>
          ))}
        </div>

        {!user?.email && <p className="text-center text-sm md:text-xl  font-semibold my-10">You must have to <span className="text-primary"><Link to='/login'>Login</Link></span> to make an appoinment</p>}

        {treatment && (
          <BookingModal
            treatment={treatment}
            selectedDate={selectedDate}
            refetch={refetch}
            isLoading={isLoading}
          />
        )}
      </div>
      
    </section>
  );
};

export default AvailableAppoinment;
