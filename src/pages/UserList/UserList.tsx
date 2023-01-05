import React, { useState } from "react";
import { ProfileCard } from "./components/ProfileCard";
import { SplashScreen } from "./components/SplashScreen";
import "./styles/UserList.scss";
import { InitialProfileList, Profile } from "./UserList+Helper";

const UserList: React.FC = () => {
  // * States
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(InitialProfileList);

  return (
    <>
      {loading ? (
        <SplashScreen videoEnded={setLoading} />
      ) : (
        <div className="users">
          <div className="users-title">
            <h1>Who are you? Choose your profile</h1>
          </div>
          <div className="users-list">
            {users.map((user: Profile, i) => (
              <ProfileCard profile={user} key={i} />
            ))}
          </div>

          <button className="users-admin">Admin profiles</button>
        </div>
      )}
    </>
  );
};

export default UserList;
