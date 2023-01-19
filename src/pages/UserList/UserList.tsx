import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import iconPlus from "../../assets/icons/iconPlus.png";
import { useAppSelector } from "../../redux/states/hooks";
import { selectUsers } from "../../redux/states/users.state";
import { Modal } from "./components/Modal";
import { ProfileCard } from "./components/ProfileCard";
import { SplashScreen } from "./components/SplashScreen";
import { Profile } from "./UserList+Helper";
import "./UserList.scss";

const UserList: React.FC = () => {
  // * States
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const stateUsers = useAppSelector(selectUsers);

  return (
    <Fragment>
      {loading ? (
        <SplashScreen videoEnded={setLoading} />
      ) : (
        <Fragment>
          {openModal ? (
            <Modal closeModal={() => setOpenModal(false)} />
          ) : (
            <div className="users">
              <div className="users-main">
                <div className="users-title">
                  <h1>Who's watching?</h1>
                </div>
                <div className="users-list">
                  {stateUsers.map((user: Profile) => (
                    <ProfileCard
                      profile={user}
                      key={user.id}
                      id={user.id}
                      editMode={false}
                    />
                  ))}
                  <div
                    className="profile-card"
                    onClick={() => setOpenModal(true)}
                  >
                    <img
                      className="profile-card-img"
                      src={iconPlus}
                      alt="add"
                    />
                    <div className="profile-card-name">Add Profile</div>
                  </div>
                </div>
                <Link to="/ManageProfiles">
                  <div className="users-admin">Manage profiles</div>
                </Link>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserList;
