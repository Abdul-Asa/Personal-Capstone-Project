import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/landing page/LandingPage';
import Signup from '../components/entry page/Signup';
import Login from '../components/entry page/Login';
import Home from '../components/dashboard/Home';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <PrivateRoute path="/user/home">
        <Home />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
