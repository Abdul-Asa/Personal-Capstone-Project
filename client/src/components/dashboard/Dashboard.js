import React from 'react';

const Dashboard = () => {
  const logout = () => {
    localStorage.removeItem('currentUser');
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <i className="fas fa-parking"></i> <h1>Padrone</h1>
        </div>
        <div className="btn-container">
          <a href="/">
            <button className="btn" onClick={logout}>
              Logout
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Dashboard;
