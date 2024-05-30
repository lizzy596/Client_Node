import React, { useState } from 'react';
import { FormInput } from '../../components/Form/FormInput';
import LoginForm from '../../features/LoginForm/LoginForm';
import'./LoginPage.css';


const LoginPage = () => {
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
        <LoginForm />
        {/* <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <FormInput 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={handleEmailChange} 
          />
          <FormInput 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          <button type="submit" className="login-button">Login</button>
        </form> */}
      </div>
  );
};

export default LoginPage;
