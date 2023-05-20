import React from "react";
import appoinmentChair from "../../../assets/images/chair.png";
import bgChair from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppoinmentBanner = ({selectedDate,setSelectedDate}) => {
  
  return (
    <div
      className="hero"
      style={{
        background: `url(${bgChair})`,
        backgroundSize: "cover",
      }}>
      <div className="hero-content flex-col md:flex-row-reverse">
        <img
          src={appoinmentChair}
          alt=""
          className="rounded-lg shadow-2xl md:w-1/2"
        />

        <div className="lg:px-12">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
