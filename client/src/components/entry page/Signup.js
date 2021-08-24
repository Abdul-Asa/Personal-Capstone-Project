import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './css/EntryPage.css';

const Signup = () => {
  let history = useHistory();

  const [error, setError] = useState('');
  const [signupInfo, setSignupInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    hasAgreed: true,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignupInfo((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };

  const submitSignup = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/users/signup', signupInfo)
      .then((response) => {
        if (response.data === 'success') {
          setError('Account created');
          history.push('/login');
        } else {
          setError(response.data);
        }
      });
  };
  return (
    <div className="entry-page">
      <a className="page-header" href="/">
        <i className="fas fa-parking"></i>
        <p className="page-header-text">Padrone</p>
      </a>
      <div className="card">
        <h1 className="form-header">Sign Up</h1>
        <form onSubmit={submitSignup}>
          <div className="form-group">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter first name"
              name="firstName"
              value={signupInfo.firstName}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter last name"
              name="lastName"
              value={signupInfo.lastName}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={signupInfo.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              value={signupInfo.password}
              onChange={handleInput}
            />
          </div>
          <p>{error}</p>
          <button className="entry-btn">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
