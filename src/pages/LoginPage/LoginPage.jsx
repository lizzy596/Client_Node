import React, { useState } from 'react';
import { FormInput } from '../../components/Form/FormInput';
import LoginForm from '../../features/LoginForm/LoginForm';
import'./LoginPage.css';


const LoginPage = () => {

  const loginStyle = {
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
    backgroundColor: 'green',
    color: 'white',
    height: '100%',
    width: '100%'
  };

  return (
      <div className="login-container">
        <LoginForm />
    
      </div>
  );
};

export default LoginPage;
