import React, { useState } from "react";
import "./Modal.scss";
import Profile5 from "../../../../assets/profile-icons/profile-05.png";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../redux";
import { createUser } from "../../../../redux/states/users.state";

export interface ModalInterface {
  closeModal: () => void;
}

const Modal: React.FC<ModalInterface> = (props) => {
  // * States
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  // * Methods
  const CloseModal = () => props.closeModal();

  const AddUser = () => {
    dispatch(
      createUser({
        id: crypto.randomUUID(),
        name: value || "John Doe",
        icon: {
          src: Profile5,
          alt: "Profile5",
        },
      })
    );
    CloseModal();
  };
  return (
    <div className="add-modal">
      <div className="add-modal-container">
        <div className="add-modal-content">
          <h1 className="add-modal-title">Add Profile</h1>
          <h3 className="add-modal-subtitle">
            Add a profile for another person watching Netflix.
          </h3>
          <div className="add-modal-divider" />
          <div className="add-modal-main">
            <img className="add-modal-img" src={Profile5} alt="Add Profile" />
            <input
              value={value}
              autoFocus
              onChange={(e) => setValue(e.target.value)}
              className="add-modal-input"
              placeholder="Name"
              type="text"
            />
          </div>
          <div className="add-modal-divider" />
          <div className="add-modal-buttons">
            <Link to="/">
              <div className="add-modal-button-ok" onClick={AddUser}>
                Continue
              </div>
            </Link>
            <Link to="/">
              <div className="add-modal-button-cancel" onClick={CloseModal}>
                Cancel
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
