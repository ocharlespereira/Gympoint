import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import Student from '../pages/Student';
import Plan from '../pages/Plan';
import Registration from '../pages/Registration';
import Request from '../pages/Request';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/studendent" component={Student} isPrivate />
      <Route path="/plan" component={Plan} isPrivate />
      <Route path="/registration" component={Registration} isPrivate />
      <Route path="/request" component={Request} isPrivate />


      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
