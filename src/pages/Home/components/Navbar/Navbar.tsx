import React from "react";
import "./Navbar.scss";
import logo from "../../../../assets/logo.png";
import iconSearch from "../../../../assets/icons/iconSearch.png";
import iconNotif from "../../../../assets/icons/iconNotif.png";
import iconArrow from "../../../../assets/icons/iconArrow.png";
import profile from "../../../../assets/profile-icons/profile-12.png";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const items = [
    "Inicio",
    "Series TV",
    "Películas",
    "Novedades más vistas",
    "Mi lista",
    "Explorar por idiomas",
  ];

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className="navbar-logo-img" src={logo} alt="netflix" />
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
        <div className="navbar-children">Infantil</div>
        <div className="navbar-notif">
          <img className="navbar-icon-notif" src={iconNotif} alt="noti" />
        </div>
        <div className="navbar-profile">
          <img className="navbar-profile-img" src={profile} alt="profile" />
          <img className="navbar-icon-arrow" src={iconArrow} alt="arrow" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
