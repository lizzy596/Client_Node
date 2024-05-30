import React, { useState } from 'react';
import RegistrationForm from '../../features/RegistrationForm/RegistrationForm';
import'./RegistrationPage.css';


const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

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
        <RegistrationForm />
      </div>
  );
};

export default RegistrationPage;