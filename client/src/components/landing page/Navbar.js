import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar" onScroll={{}}>
      <div className="container">
        <a className="logo" href="/">
          <i className="fas fa-parking"></i> <h1>Padrone</h1>
        </a>
        <div className="btn-container">
          <button className="btn">
            <a href="/signup">Sign up</a>
          </button>
          <button className="btn">
            <a href="/login">Login</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
