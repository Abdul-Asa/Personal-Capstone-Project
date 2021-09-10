import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../components/landing page/LandingPage';
import Signup from '../components/entry page/Signup';
import Login from '../components/entry page/Login';
import Home from '../components/dashboard/Home';
import Confirmation from '../components/entry page/Confirmation';
import PrivateRoute from './PrivateRoute';
import ConfirmRoute from './confirmRoute';
import WrongConfirmation from '../components/entry page/WrongConfirmation';

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
      <ConfirmRoute
        path="/confirm/:confirmationCode"
        failureChild={<WrongConfirmation />}
      >
        <Confirmation />
      </ConfirmRoute>
    </Switch>
  );
};

export default Routes;
