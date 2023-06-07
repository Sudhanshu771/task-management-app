import React, { useState } from 'react';
import registerUser from '../registerUser';
import '../RegistrationForm.css';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(email, password);
    setRegistrationSuccess(true);
  };

  return (
    <div className="registration-form-container">
      <h2 className="registration-form-heading">Registration Form</h2>
      {registrationSuccess ? (
        <div className="registration-success-message">
          Registration Successful! You can now sign in with your credentials.
        </div>
      ) : (
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
