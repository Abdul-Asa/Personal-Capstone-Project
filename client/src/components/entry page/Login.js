import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setUser, getUser } from '../../utils/Common';
import { config } from '../../config';
import axios from 'axios';

const Login = () => {
  const { BASEURL } = config;

  const [error, setError] = useState('');
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  let history = useHistory();
  const user = getUser();

  if (user) {
    history.push('/user/home');
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginInfo((inputDetails) => {
      return { ...inputDetails, [name]: value };
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    axios.post(`${BASEURL}/users/login`, loginInfo).then((response) => {
      if (typeof response.data == 'object') {
        setUser(response.data);
        history.push('user/home');
      } else setError(response.data);
    });
  };

  return (
    <div className="entry-page">
      <a className="page-header" href="/">
        <i className="fas fa-parking"></i>
        <p className="page-header-text">Padrone</p>
      </a>
      <div className="card">
        <h1 className="form-header">Login</h1>
        <form onSubmit={submitLogin}>
          <div className="form-group">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={loginInfo.email}
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
              value={loginInfo.password}
              onChange={handleInput}
            />
          </div>
          <p>{error}</p>
          <button className="entry-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
