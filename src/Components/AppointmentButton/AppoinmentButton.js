import React from "react";

const AppoinmentButton = ({ children }) => {
  return (
    <button className="btn border-0 bg-gradient-to-r from-primary to-secondary text-white">
      {children}
    </button>
  );
};

export default AppoinmentButton;
