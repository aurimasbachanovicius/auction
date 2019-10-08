import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemsPage from './pages/Items';
import AuthPage from './pages/Auth';
import NotFoundPage from './pages/NotFound';
import Sell from './pages/Sell';

const Routes = () => (
  <Switch>
    <Route path="/" component={ItemsPage} exact />
    <Route path="/signup" component={AuthPage} exact />
    <Route path="/sell" component={Sell} exact />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
