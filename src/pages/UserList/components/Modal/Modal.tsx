import React from "react";
import "./Modal.scss";
import Profile5 from "../../../../assets/profile-icons/profile-05.png";

export interface ModalInterface {}

const Modal: React.FC<ModalInterface> = () => {
  return (
    <div className="add-modal">
      <div className="add-modal-container">
        <div className="add-modal-content">
          <h1 className="add-modal-title">Add Profile</h1>
          <h3 className="add-modal-subtitle">
            Add a profile for another person watchnig Netflix.
          </h3>
          <div className="add-modal-divider" />
          <div className="add-modal-main">
            <img className="add-modal-img" src={Profile5} alt="Add Profile" />
            <input className="add-modal-input" placeholder="Name" type="text" />
          </div>
          <div className="add-modal-divider" />
          <div className="add-modal-buttons">
            <div className="add-modal-button-ok">Continue</div>
            <div className="add-modal-button-cancel">Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
