import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PropTypes from "prop-types";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions/index";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames("header", {
    isLogin,
    isRegister,
  });

  const profile = "Perfil";
  const signOff = "Cerra Sesión";
  const login = "Iniciar Sesión";
  return (
    <header className={headerClass}>
      <Link to="/Video-Page/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img
            src={Object.keys(user).length > 0 ? gravatar(user.email) : userIcon}
            alt={user.email}
          />
          <p>{profile}</p>
        </div>
        <ul>
          {/* {hasUser ? (
            <li>
              <Link to="/cuenta">{user.name}</Link>
            </li>
          ) : null} */}
          {hasUser ? (
            <>
              <li>
                <Link to="/Video-Page/cuenta">{user.name}</Link>
              </li>
              <li>
                <Link to="#logout" onClick={handleLogout}>
                  {signOff}
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/Video-Page/login">{login}</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
