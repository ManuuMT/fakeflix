import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import iconPencil from "../../../../assets/icons/iconPencil.png";
import { Profile } from "../../UserList+Helper";
import "./ProfileCard.scss";

interface ProfileCardInterface {
  profile: Profile;
  editMode: boolean;
  id: string;
  select?: (id: string) => void;
}

const ProfileCard: React.FC<ProfileCardInterface> = (props) => {
  // * Methods
  const EditLayerBuilder = () => (
    <div
      className="profile-card-layer"
      onClick={() => props.select?.(props.id)}
    >
      <img className="profile-card-edit-img" src={iconPencil} alt="edit" />
    </div>
  );

  return (
    <Fragment>
      <div className="profile-card">
        {props.editMode && EditLayerBuilder()}
        <Link to="/home">
          <img className="profile-card-img" {...props.profile.icon} />
          <div className="profile-card-name">{props.profile.name}</div>
        </Link>
      </div>
    </Fragment>
  );
};

export default ProfileCard;
