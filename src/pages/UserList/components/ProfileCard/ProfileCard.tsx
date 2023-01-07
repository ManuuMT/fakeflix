import React from "react";
import { Profile } from "../../UserList+Helper";
import "./styles/ProfileCard.scss";
import { Link } from "react-router-dom";

interface ProfileCardInterface {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardInterface> = (props) => {
  return (
    // style={{ textDecoration: "none" }}
    <div className="profile-card">
      <Link to="/home">
        <img className="profile-card-img" {...props.profile.icon} />
        <div className="profile-card-name">{props.profile.name}</div>
      </Link>
    </div>
  );
};

export default ProfileCard;
