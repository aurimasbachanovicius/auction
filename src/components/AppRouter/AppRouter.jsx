import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Homepage from '../Homepage';
import PrimarySearchAppBar from '../Toolbar';
import NotFound from '../ErrorPage/NotFound';
import Authentication from '../Account/Authentication';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0B409C' }
  },
  overrides: {
    MuiPaper: {
      elevation4: {
        boxShadow: 'none',
        borderBottom: '1px solid #e4e4e4'
      }
    },
    MuiToolbar: {
      regular: {
        '@media (min-width: 600px)': {
          minHeight: '72px'
        }
      }
    }
  }
});

function AppRouter() {
  const drawerToggleClickHandler = () => {
    // this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <PrimarySearchAppBar drawerClickHandler={drawerToggleClickHandler} />
        <div style={{ height: '100%' }}>
          <Container maxWidth="lg" style={{ marginTop: 90 }}>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/signup" component={Authentication} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default AppRouter;
