import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context Api/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, selectedDate, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name: treatmentName, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;

    const booking = {
      appoinmentDate: date,
      treatment: treatmentName,
      patient: name,
      email,
      slot,
      phone,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("booking confirmed");
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>

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

            <select name="slot" className="select select-bordered w-full">
              {slots?.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              value={user?.displayName}
              placeholder="Your Name"
              className="input w-full input-bordered"
              disabled
            />
            <input
              name="email"
              type="email"
              value={user?.email}
              placeholder="Email Address"
              className="input w-full input-bordered"
              disabled
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
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
