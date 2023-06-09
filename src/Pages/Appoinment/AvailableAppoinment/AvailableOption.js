import React, { useContext } from "react";
import { AuthContext } from "../../../Context Api/AuthProvider";

const AvailableOption = ({ option, setTreatment }) => {
  const { user } = useContext(AuthContext);
  const { name, slots, price } = option;
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

          <p className="font-semibold">${price}</p>

          <div className="card-actions justify-center">
            {
              user?.email?
              <label
              onClick={() => setTreatment(option)}
              htmlFor="my-modal-3"
              className="btn border-0 bg-gradient-to-r from-primary to-secondary text-white">
              Book Appoinment
            </label>

            :

            <label
              onClick={() => setTreatment(option)}
              htmlFor="my-modal-3"
              className="btn border-0 text-white" disabled>
              Book Appoinment
            </label>
            }
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AvailableOption;
