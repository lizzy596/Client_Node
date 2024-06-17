import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { useNavigate } from "react-router-dom";
import './Navigation.css';

const Navigation = ({
  navTitle,
  backgroundColor = '#333', // Default background color
  textColor = '#fff',        // Default text color
  height = '60px',           // Default height
  width = '100%'             // Default width
}) => {
  const navigate = useNavigate();
  const navStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    height: height,
    width: width
  };

const goRegister = () => {
  navigate("/register");
}

const goLogin = () => {
  navigate("/login");
}


  return (
    <nav className="custom-nav" style={navStyle}>
      <div className="nav-title">{navTitle}</div>
      <div className="nav-button">
      <Button text="Login" onClick={goLogin} backgroundColor="#007BFF" textColor="#fff" height="40px" width="100px" />
      <Button text="Logout" onClick={goLogin}  backgroundColor="#007BFF" textColor="#fff" height="40px" width="100px" />
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  navTitle: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

export default Navigation;
