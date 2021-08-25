import React from 'react';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo-nav-wrap">
          <a className="logo" href="/">
            <i className="fas fa-parking"></i> <h1>Padrone</h1>
          </a>
          {/* <div className="links-container">
            <ul className="nav-links">
              <li className="nav-link">About</li>
              <li className="nav-link">Sponsor</li>
            </ul>
          </div> */}
        </div>

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
