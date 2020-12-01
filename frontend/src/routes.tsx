import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import StartMenu from './pages/StartMenu';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Walkthrough from './pages/Walkthrough';

const Router: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StartMenu} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/walkthrough" component={Walkthrough} />
    </Switch>
  </BrowserRouter>
);

export default Router;
