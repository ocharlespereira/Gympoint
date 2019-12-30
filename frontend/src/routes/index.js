import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';

import StudentList from '~/pages/Student/List';
import StudentForm from '~/pages/Student/Form';

import PlanList from '~/pages/Plan/List';
import PlanForm from '~/pages/Plan/Form';

import RegistrationList from '~/pages/Registration/List';
import RegistrationForm from '~/pages/Registration/Form';

import HelpOrderList from '~/pages/HelpOrderList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/students" component={StudentList} isPrivate exact />
      <Route path="/students/new" component={StudentForm} isPrivate />
      <Route path="/students/:id/edit" component={StudentForm} isPrivate />

      <Route path="/plan" component={PlanList} isPrivate exact />
      <Route path="/plan/new" component={PlanForm} isPrivate />
      <Route path="/plan/:id/edit" component={PlanForm} isPrivate />

      <Route
        path="/registration"
        component={RegistrationList}
        isPrivate
        exact
      />
      <Route path="/registration/new" component={RegistrationForm} isPrivate />
      <Route
        path="/registration/:id/edit"
        component={RegistrationForm}
        isPrivate
      />

      <Route path="/help" component={HelpOrderList} isPrivate exact />
    </Switch>
  );
}
