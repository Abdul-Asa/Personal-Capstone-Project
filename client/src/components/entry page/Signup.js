import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { getUser } from '../../utils/Common';
import { config } from '../../config';
import './css/EntryPage.css';

const Signup = () => {
  const { BASEURL } = config;

  let history = useHistory();
  const user = getUser();

  if (user) {
    history.push('/user/home');
  }

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

  // const handleCheck = (e) => {
  //   const { value } = e.target;
  //   console.log(value);
  // };

  const submitSignup = (e) => {
    e.preventDefault();
    axios.post(`${BASEURL}/auth/signup`, signupInfo).then((response) => {
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
          {/* <div className="form-group">
            <label className="form-label">Accept Terms and Conditions</label>
            <input
              type="checkbox"
              className="checkbox"
              id="hasAgreed"
              name="hasAgreed"
              // value={signupInfo.hasAgreed}
              // onChange={handleCheck}
            />
          </div> */}
          <p>{error}</p>
          <button className="entry-btn">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
