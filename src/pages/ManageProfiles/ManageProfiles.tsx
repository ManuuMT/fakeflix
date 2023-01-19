import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import iconPlus from "../../assets/icons/iconPlus.png";
import { useAppSelector } from "../../redux";
import { selectUsers } from "../../redux/states/users.state";
import { Modal, ModalEdit, Profile, ProfileCard } from "../UserList";
import "./ManageProfiles.scss";

const ManageProfiles: React.FC = () => {
  // * States
  const stateUsers = useAppSelector(selectUsers);

  const [selected, setSelected] = useState("");
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <Fragment>
      {openEditModal && (
        <ModalEdit
          closeModal={() => setOpenEditModal(false)}
          editID={selected}
        />
      )}
      {openAddModal && <Modal closeModal={() => setOpenAddModal(false)} />}
      <div className="users">
        <div className="users-main">
          <div className="users-title">
            <h1>Manage Profiles: </h1>
          </div>
          <div className="users-list">
            {stateUsers.map((user: Profile) => (
              <ProfileCard
                profile={user}
                key={user.id}
                id={user.id}
                editMode={true}
                select={(id: string) => {
                  setSelected(id);
                  setOpenEditModal(true);
                }}
              />
            ))}
            <div className="profile-card" onClick={() => setOpenAddModal(true)}>
              <img className="profile-card-img" src={iconPlus} alt="add" />
              <div className="profile-card-name">Add Profile</div>
            </div>
          </div>
          <Link to="/">
            <div className="users-manage">Done</div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ManageProfiles;
