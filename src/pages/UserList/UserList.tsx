import React, { Fragment, useState } from "react";
import iconPlus from "../../assets/icons/iconPlus.png";
import Profile5 from "../../assets/profile-icons/profile-05.png";
import { useAppDispatch, useAppSelector } from "../../redux/states/hooks";
import { modifyUser, selectUsers } from "../../redux/states/users.state";
import { Modal } from "./components/Modal";
import { ProfileCard } from "./components/ProfileCard";
import { SplashScreen } from "./components/SplashScreen";
import { Profile } from "./UserList+Helper";
import "./UserList.scss";

const UserList: React.FC = () => {
  // * States
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const stateUsers = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const ModifyUser = () => {
    dispatch(
      modifyUser({
        id: 1,
        name: "Manu Gato",
        icon: {
          src: Profile5,
          alt: "Profile5",
        },
      })
    );
  };

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
                  {stateUsers.map((user: Profile, i) => (
                    <ProfileCard profile={user} key={i} />
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

                <button
                  className="users-admin"
                  onClick={() => setOpenModal(true)}
                >
                  Manage profiles
                </button>
                <button className="users-admin" onClick={ModifyUser}>
                  Modify user 1
                </button>
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserList;
