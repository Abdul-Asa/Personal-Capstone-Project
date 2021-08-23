import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/landing page/LandingPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/login">
        <div className="container text-center">
          <h1>Login</h1>
        </div>
      </Route>
      <Route path="/signup">
        <div className="container text-center">
          <h1>Sign up</h1>
        </div>
      </Route>
    </Switch>
  );
};

export default Routes;
