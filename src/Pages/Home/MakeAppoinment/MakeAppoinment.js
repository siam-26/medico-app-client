import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appoinment from "../../../assets/images/appointment.png";
import AppoinmentButton from "../../../Components/AppointmentButton/AppoinmentButton";
import { Link } from "react-router-dom";

const MakeAppoinment = () => {
  return (
    <section
      className="mt-16 lg:mt-24"
      style={{
        background: `url(${appoinment})`,
      }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg"
          />
          <div className="text-white">
            <h4 className="text-primary font-bold">Appointment</h4>
            <h1 className="text-4xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              Take the first step towards a healthier smile by scheduling your
              appointment today. Our convenient online booking system allows you
              to effortlessly secure a time slot that fits your schedule. Don't
              wait any longer to receive the exceptional dental care you
              deserve. Make an appointment with our experienced team and embark
              on your journey towards optimal oral health and a confident smile.
            </p>
            <Link to='/appoinment'>
              <AppoinmentButton>Get Started</AppoinmentButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
