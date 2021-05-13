import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = () => {
  const profile = "Perfil";
  const account = "Cuenta";
  const signOff = "Cerrar Sesión";
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="" />
          <p>{profile}</p>
        </div>
        <ul>
          <li>
            <a href="/">{account}</a>
          </li>
          <li>
            <a href="/">{signOff}</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
