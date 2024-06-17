import React, { useState } from 'react';
import { FormInput } from '../../components/Form/FormInput';
import LoginForm from '../../features/LoginForm/LoginForm';
import'./LoginPage.css';


const LoginPage = () => {



  return (
      <div className="login-container">
        <LoginForm />
    
      </div>
  );
};

export default LoginPage;
