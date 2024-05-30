import React from 'react';
import PropTypes from 'prop-types';
import './FormInput.css';

const FormInput = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  backgroundColor = '#ffffff', // Default background color
  textColor = '#000000',        // Default text color
  height = '40px',              // Default height
  width = '100%'                // Default width
}) => {
  const inputStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    height: height,
    width: width
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="custom-input"
      style={inputStyle}
    />
  );
};

FormInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

export default FormInput;
