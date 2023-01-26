import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import iconArrow from "../../../../assets/icons/iconArrow.png";
import iconNotif from "../../../../assets/icons/iconNotif.png";
import iconSearch from "../../../../assets/icons/iconSearch.png";
import iconPencil from "../../../../assets/icons/iconPencil.png";
import iconTransfer from "../../../../assets/icons/iconTransfer.png";
import iconUser from "../../../../assets/icons/iconUser.png";
import iconHelp from "../../../../assets/icons/iconHelp.png";

import logo from "../../../../assets/logo.png";
import { useAppSelector } from "../../../../redux";
import { selectUsers } from "../../../../redux/states/users.state";
import { Profile } from "../../../UserList";
import "./Navbar.scss";

const nav: React.FC = () => {
  const items = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My list",
    "Browse by Languages",
  ];

  // * States
  const [user, setUser] = useState<Profile>();
  const stateUsers = useAppSelector(selectUsers);

  // * Life Cycle
  useEffect(() => {
    const foundUser = stateUsers.find(
      (user: Profile) => user.id === window.localStorage.getItem("userID")
    );
    setUser(foundUser);
  }, []);

  useEffect(() => {
    const AddNavClass = () => {
      const nav = document.querySelector("nav");
      nav?.classList.toggle("nav-color", window.scrollY > 0);
    };
    window.addEventListener("scroll", AddNavClass);

    return () => window.removeEventListener("scroll", AddNavClass);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img className="nav-logo-img" src={logo} alt="netflix" />
        </Link>

        <ul className="nav-list">
          {items.map((item) => (
            <li className="nav-list-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-right">
        <div className="nav-search">
          <img className="nav-icon-search" src={iconSearch} alt="search" />
        </div>
        <div className="nav-children">Kids</div>
        <div className="nav-notif">
          <img className="nav-icon-notif" src={iconNotif} alt="noti" />
        </div>
        <div className="nav-profile">
          <img
            className="nav-profile-img"
            src={user?.icon.src}
            alt={user?.icon.alt}
          />
          <img className="nav-icon-arrow" src={iconArrow} alt="arrow" />
          <div className="nav-profile-menu">
            <div className="nav-profile-menu-users">
              {stateUsers
                .filter((profiles: Profile) => profiles.id !== user?.id)
                .map((profiles: Profile) => (
                  <div
                    className="nav-profile-menu-users-item"
                    key={profiles.id}
                  >
                    <img className="nav-profile-img" {...profiles.icon} />
                    <div>{profiles.name}</div>
                  </div>
                ))}
              <div className="nav-profile-menu-users-item">
                <img
                  className="nav-profile-icon white"
                  src={iconPencil}
                  alt="edit"
                />
                <div>Manage Profiles</div>
              </div>
              <div className="nav-profile-menu-users-item">
                <img
                  className="nav-profile-icon white"
                  src={iconTransfer}
                  alt="transfer"
                />
                <div>Transfer Profile</div>
              </div>
              <div className="nav-profile-menu-users-item">
                <img
                  className="nav-profile-icon white"
                  src={iconUser}
                  alt="user"
                />
                <div>Account</div>
              </div>
              <div className="nav-profile-menu-users-item">
                <img
                  className="nav-profile-icon white"
                  src={iconHelp}
                  alt="help"
                />
                <div>Help Center</div>
              </div>
            </div>
            <div className="nav-profile-menu-signout">Sign out of Netflix</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default nav;
