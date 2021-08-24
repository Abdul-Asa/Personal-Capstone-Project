import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/LandingPage.css';
import { getUser } from '../../utils/Common';

const LandingPage = () => {
  let history = useHistory();
  const user = getUser();

  if (user) {
    history.push('/user/home');
  }
  return (
    <>
      <Navbar />
      <div>
        <h1>Home</h1>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
