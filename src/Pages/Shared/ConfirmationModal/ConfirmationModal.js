import React from "react";

const ConfirmationModal = ({
  deleteDoctor,
  title,
  message,
  cancelDeleting,
  removeDoctor,
}) => {
  return (
    <div className="">
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4 text-lg">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => removeDoctor(deleteDoctor._id)}
              htmlFor="my_modal_6"
              className="btn">
              Confirm
            </label>
            <button onClick={cancelDeleting} className="btn">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
