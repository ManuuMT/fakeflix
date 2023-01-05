import React, { useState } from "react";
import "./styles/UserList.scss";
const Splash = React.lazy(() => import("./SplashScreen/SplashScreen"));

const UserList: React.FC = () => {
  // * States
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Splash videoEnded={setLoading} />
      ) : (
        <>
          <p>Users List</p>
        </>
      )}
    </>
  );
};

export default UserList;
