import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import ProductsPage from './components/Homepage';
import MainNavigation from './components/Toolbar';
import ErrorPage from './components/ErrorPage/NotFound';

import './App.css';
import Authentication from './components/Account/Authentication';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0B409C' }
  },
  overrides: {
    MuiAppBar: {
      root: {
        borderBottom: '1px solid #e4e4e4'
      }
    },
    MuiToolbar: {
      regular: {
        '@media (min-width: 600px)': {
          minHeight: '70px'
        }
      }
    },
    MuiIconButton: {
      root: {
        color: 'inherit'
      }
    }
  },
  shadows: Array(25).fill('none')
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainNavigation />
        <main className="main-content">
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/signup" component={Authentication} />
            <Route component={ErrorPage} />
          </Switch>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
