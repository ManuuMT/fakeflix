import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import {
  deleteUser,
  modifyUser,
  selectUsers,
} from "../../../../redux/states/users.state";
import { IconDTO, Profile } from "../../UserList+Helper";
import "./ModalEdit.scss";
import iconEdit from "../../../../assets/icons/iconEdit.png";
import { EditProfile } from "../../../ManageProfiles/components";

export interface ModalEditInterface {
  editID: string;
  closeModal: () => void;
}

const ModalEdit: React.FC<ModalEditInterface> = (props) => {
  // * States
  const stateUsers = useAppSelector(selectUsers);
  const [user, setUser] = useState<Profile>();
  const [value, setValue] = useState("");
  const [newIcon, setNewIcon] = useState<IconDTO>();
  const [openEdit, setOpenEdit] = useState(false);

  const dispatch = useAppDispatch();

  // * Methods
  const CloseModal = () => props.closeModal();

  const ModifyUser = () => {
    dispatch(
      modifyUser({
        id: props.editID,
        name: value || "John Doe",
        icon: newIcon && newIcon,
      })
    );
    CloseModal();
  };

  const DeleteUser = () => {
    dispatch(deleteUser(props.editID));
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
      {openEdit && (
        <EditProfile
          user={user!}
          closeModal={() => setOpenEdit(false)}
          selectedIcon={setNewIcon}
        />
      )}
      <div className="edit-modal-container">
        <div className="edit-modal-content">
          <div className="edit-modal-title">Edit Profile</div>
          <div className="edit-modal-divider" />
          <div className="add-modal-main">
            <div className="edit-modal-img-container">
              <img
                className="add-modal-img"
                src={newIcon ? newIcon.src : user?.icon.src}
                alt={newIcon ? newIcon.alt : user?.icon.alt}
              />
              <img
                className="edit-modal-icon"
                src={iconEdit}
                alt="edit"
                onClick={() => setOpenEdit(true)}
              />
            </div>
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
            <div className="add-modal-button-cancel" onClick={DeleteUser}>
              Delete Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
