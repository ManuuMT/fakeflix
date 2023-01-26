import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import logo from "../../../../assets/logo.png";
import iconSearch from "../../../../assets/icons/iconSearch.png";
import iconNotif from "../../../../assets/icons/iconNotif.png";
import iconArrow from "../../../../assets/icons/iconArrow.png";
import { useAppSelector } from "../../../../redux";
import { selectUsers } from "../../../../redux/states/users.state";
import { Profile } from "../../../UserList";
import { Link } from "react-router-dom";
import { useHover } from "../../../../hooks";

const Navbar: React.FC = () => {
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
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  // * Life Cycle
  useEffect(() => {
    const foundUser = stateUsers.find(
      (user) => user.id === window.localStorage.getItem("userID")
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
      <div className="navbar-left">
        <Link to="/">
          <img className="navbar-logo-img" src={logo} alt="netflix" />
        </Link>

        <ul className="navbar-list">
          {items.map((item) => (
            <li className="navbar-list-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <div className="navbar-search">
          <img className="navbar-icon-search" src={iconSearch} alt="search" />
        </div>
        <div className="navbar-children">Kids</div>
        <div className="navbar-notif">
          <img className="navbar-icon-notif" src={iconNotif} alt="noti" />
        </div>
        <div className="navbar-profile" ref={hoverRef}>
          <img
            className="navbar-profile-img"
            src={user?.icon.src}
            alt={user?.icon.alt}
          />
          <img className="navbar-icon-arrow" src={iconArrow} alt="arrow" />
        </div>
        <div className={`nav-profile-menu ${isHovered && "active"}`}>
          <div className="nav-profile-menu-users">Users</div>
          <div className="nav-profile-menu-options">Manage</div>
          <div className="nav-profile-menu-signout">Sign out of Netflix</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
