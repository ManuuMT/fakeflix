import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import { modifyUser, selectUsers } from "../../../../redux/states/users.state";
import { Profile } from "../../UserList+Helper";
import "./ModalEdit.scss";
export interface ModalEditInterface {
  editID: string;
  closeModal: () => void;
}

const ModalEdit: React.FC<ModalEditInterface> = (props) => {
  // * States
  const stateUsers = useAppSelector(selectUsers);
  const [user, setUser] = useState<Profile>();
  const [value, setValue] = useState("");

  const dispatch = useAppDispatch();

  // * Methods
  const CloseModal = () => props.closeModal();

  const ModifyUser = () => {
    dispatch(
      modifyUser({
        id: props.editID,
        name: value || "John Doe",
      })
    );
    CloseModal();
  };

  // * Life Cycle
  useEffect(() => {
    const foundUser = stateUsers.find(
      (user: Profile) => user.id === props.editID
    );
    setUser(foundUser);
    setValue(foundUser?.name);
  }, []);

  return (
    <div className="edit-modal">
      <div className="edit-modal-container">
        <div className="edit-modal-content">
          <div className="edit-modal-title">Edit Profile</div>
          <div className="edit-modal-divider" />
          <div className="add-modal-main">
            <img
              className="add-modal-img"
              src={user?.icon.src}
              alt={user?.icon.alt}
            />
            <input
              value={value}
              autoFocus
              onChange={(e) => setValue(e.target.value)}
              className="add-modal-input"
              type="text"
            />
          </div>
          <div className="edit-modal-divider" />
          <div className="add-modal-buttons">
            <div className="add-modal-button-ok" onClick={ModifyUser}>
              Save
            </div>
            <div className="add-modal-button-cancel" onClick={CloseModal}>
              Cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
