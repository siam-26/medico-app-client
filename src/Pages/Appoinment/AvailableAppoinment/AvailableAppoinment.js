import { format } from "date-fns";
import React, { useState } from "react";
import AvailableOption from "./AvailableOption";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";

const AvailableAppoinment = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");

  const { data: appoinmentOptions = [], refetch, isLoading } = useQuery({
    queryKey: ["appoinmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/appoinmentOptions?date=${date}`).then(
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

        {treatment && (
          <BookingModal
            treatment={treatment}
            selectedDate={selectedDate}
            refetch={refetch}
            isLoading = {isLoading}
          />
        )}
      </div>
    </section>
  );
};

export default AvailableAppoinment;
