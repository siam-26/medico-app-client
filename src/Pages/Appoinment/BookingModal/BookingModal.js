import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot;
    const phone = form.phone.value;

    const booking = {
      appoinmentDate: date,
      treatment: name,
      patient: name,
      email,
      slot,
      phone,
    };

    console.log(form.select.value);
  };
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

          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              value={date}
              placeholder="Type here"
              className="input w-full input-bordered"
              disabled
            />

            <select name="select" className="select select-bordered w-full">
              {slots?.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            {/* <input
              type="text"
              placeholder="Type here"
              className="input w-full input-bordered"
            /> */}
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
