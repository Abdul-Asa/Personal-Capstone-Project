import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="logo" href="/">
          <i className="fas fa-parking"></i> <h1>Padrone</h1>
        </a>
        <div className="btn-container">
          <a href="/signup">
            <button className="btn">Sign up</button>
          </a>
          <a href="/login">
            <button className="btn">Login</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
