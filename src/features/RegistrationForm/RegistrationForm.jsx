import React, { useState } from 'react';
import PropTypes from 'prop-types';
import authService from '../../services/auth.service';
import { FormInput } from '../../components/Form/FormInput';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await authService.register({ name, email, password });
    console.log('user', user)
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <FormInput
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
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
        <button type="submit" className="Registration-button">Sign Up</button>
      </form>
    </div>
  );
};


export default RegistrationForm;