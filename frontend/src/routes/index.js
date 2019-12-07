import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

      <Route path="dashboard" component={Dashboard} />
      <Route path="/studendent" component={Student} />
      <Route path="/plan" component={Plan} />
      <Route path="/registration" component={Registration} />
      <Route path="/request" component={Request} />
    </Switch>
  );
}
