import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  text,
  backgroundColor = '#008CBA', // Default background color
  textColor = '#ffffff',        // Default text color
  height = '50px',              // Default height
  width = '150px'               // Default width
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    height: height,
    width: width
  };

  return (
    <button className="custom-button" style={buttonStyle}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

export default Button;