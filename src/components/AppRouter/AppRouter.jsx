import React from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Homepage from '../Homepage';
import PrimarySearchAppBar from '../Toolbar';
import NotFound from '../ErrorPage/NotFound';
import AuthenticateUser from '../../containers/AuthenticateUser';

function AppRouter() {
  const drawerToggleClickHandler = () => {
    // this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  return (
    <Router>
      <PrimarySearchAppBar drawerClickHandler={drawerToggleClickHandler} />

      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <div style={{ height: '100%' }}>
        <Container maxWidth="lg" style={{ marginTop: 90 }}>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/signup" component={AuthenticateUser} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default AppRouter;
