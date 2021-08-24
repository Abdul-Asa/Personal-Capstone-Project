import React from 'react';
import Dashboard from './Dashboard';

const Home = () => {
  const authentication = () => {
    return JSON.parse(localStorage.getItem('currentUser'));
  };
  const user = authentication();
  return (
    <div>
      <Dashboard />
      <div className="container">
        <h1>Welcome {user.name}</h1>
      </div>
    </div>
  );
};

export default Home;
