import React, { useState } from "react";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AvailableAppoinment from "../AvailableAppoinment/AvailableAppoinment";

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="md:mx-5">
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableAppoinment selectedDate={selectedDate} />
    </div>
  );
};

export default Appoinment;
