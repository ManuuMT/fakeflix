import React from "react";
import "./EditProfile.scss";
import iconArrow from "../../../../assets/icons/iconArrowLeft.png";
import { IconDTO, Profile } from "../../../UserList";
import { ProfileClassics, ProfileFavorites } from "./EditProfile+Helper";

interface EditProfileProps {
  user: Profile;
  closeModal: () => void;
  selectedIcon: (icon: IconDTO) => void;
}

const EditProfile: React.FC<EditProfileProps> = (props) => {
  // * Methods
  const HandleClick = ({ ...icon }: IconDTO) => {
    props.selectedIcon(icon);
    props.closeModal();
  };

  return (
    <div className="edit-profile">
      <div className="ep-nav-container">
        <div className="ep-nav">
          <div className="ep-nav-left">
            <img
              src={iconArrow}
              alt="goback"
              className="ep-nav-icon white"
              onClick={props.closeModal}
            />
            <div className="ep-nav-text">
              <h1>Edit profile</h1>
              <h2>Choose an icon for the profile</h2>
            </div>
          </div>
          <div className="ep-nav-right">
            <h2 className="ep-nav-name">{props.user.name}</h2>
            <img className="ep-nav-img" {...props.user.icon} />
          </div>
        </div>
      </div>
      <div className="ep-options-container">
        <div className="ep-options">
          <h1 className="ep-options-title">Classics</h1>
          <div className="ep-options-main">
            {ProfileClassics.map((image) => (
              <img
                key={image.alt}
                {...image}
                className="ep-options-img"
                onClick={() => HandleClick(image)}
              ></img>
            ))}
          </div>
          <h1 className="ep-options-title">ManuDev's favorites</h1>
          <div className="ep-options-main">
            {ProfileFavorites.map((image) => (
              <img
                key={image.alt}
                {...image}
                className="ep-options-img"
                onClick={() => HandleClick(image)}
              ></img>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
