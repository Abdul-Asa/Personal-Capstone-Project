import React from 'react';
import Dashboard from './Dashboard';
import { getUser } from '../../utils/Common';

const Home = () => {
  const user = getUser();
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
