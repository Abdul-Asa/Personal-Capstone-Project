import React from 'react';
// import axios from 'axios';
import Dashboard from './Dashboard';
import Footer from '../landing page/Footer';
import { getUser } from '../../utils/Common';
// import { config } from '../../config';

const Home = () => {
  const user = getUser();
  // const { BASEURL } = config;
  //   let header = {
  //     headers: {
  //       'auth-token': user.token,
  //     },
  //   };
  // const testAuth = () => {
  //   axios.get(`${BASEURL}/private`, header).then((response) => {
  //     console.log(response);
  //   });
  // };
  return (
    <div>
      <Dashboard />
      <div className="container">
        <h1>Welcome {user.name}</h1>
      </div>
      {/* <button className="btn-primary" onClick={testAuth}>
        Test
      </button> */}
      <Footer />
    </div>
  );
};

export default Home;
