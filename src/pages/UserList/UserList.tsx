import React, { useState } from "react";
import { ProfileCard } from "./components/ProfileCard";
import { SplashScreen } from "./components/SplashScreen";
import "./UserList.scss";
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
          <div className="users-main">
            <div className="users-title">
              <h1>Who's watching?</h1>
            </div>
            <div className="users-list">
              {users.map((user: Profile, i) => (
                <ProfileCard profile={user} key={i} />
              ))}
            </div>

            <button className="users-admin">Manage profiles</button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
