import React from "react";
import { Profile } from "../../UserList+Helper";
import "./styles/ProfileCard.scss";

interface ProfileCardInterface {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardInterface> = (props) => {
  return (
    <div className="profile-card">
      <img className="profile-card-img" {...props.profile.icon} />
      <div className="profile-card-name">{props.profile.name}</div>
    </div>
  );
};

export default ProfileCard;
