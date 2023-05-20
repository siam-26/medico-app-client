import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>

          <form className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={date}
              placeholder="Type here"
              className="input w-full input-bordered"
              disabled
            />

            <select className="select select-bordered w-full">
                {
                    slots?.map((slot)=><option value={slot}>{slot}</option>)
                }            
            </select>

            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="w-full btn btn-accent text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
