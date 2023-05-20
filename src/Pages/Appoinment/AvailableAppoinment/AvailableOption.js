import React from "react";

const AvailableOption = ({ option,setTreatment }) => {
  const { name, slots } = option;
  return (
    <div>
      <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title text-secondary font-bold mx-auto">
            {name}
          </h2>
          <p> {slots.length > 0 ? slots[0] : "Try another day"} </p>
          <p>
            {slots?.length} {slots?.length > 2 ? "slots" : "slot"} available
          </p>
          <div className="card-actions justify-center">
            <label onClick={()=>setTreatment(option)} htmlFor="my-modal-3" className="btn border-0 bg-gradient-to-r from-primary to-secondary text-white">
              Book Appoinment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableOption;
