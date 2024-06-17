import React, { useState } from 'react';
import authService from '../../services/auth.service';
import { FormInput } from '../../components/Form/FormInput';
import './LoginForm.css';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await authService.login({ email, password });
    navigate("/tasks");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
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
      </form>
    </div>
  );
};



export default LoginForm;
