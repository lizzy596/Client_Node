import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import './Form.css';

const Form = ({
  formTitle,
  backgroundColor = '#ffffff', // Default background color
  textColor = '#000000',        // Default text color
  height = 'auto',              // Default height
  width = '100%'                // Default width
}) => {
  const formStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    height: height,
    width: width
  };

  return (
    <div className="custom-form" style={formStyle}>
      <h2 className="form-title">{formTitle}</h2>
      <FormInput placeholder="Enter your name" />
      <FormInput type="email" placeholder="Enter your email" />
      <FormInput type="password" placeholder="Enter your password" />
      <button type="submit" className="submit-button">Submit</button>
    </div>
  );
};

Form.propTypes = {
  formTitle: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

export default Form;
