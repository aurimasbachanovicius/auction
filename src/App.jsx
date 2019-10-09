import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MainNavigation from './components/Navigation/MainNavigation';

import './App.css';
import Routes from './Routes';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0B409C' }
  },
  breakpoints: {
    values: {
      md: 1060
    }
  },
  overrides: {
    MuiTypography: {
      h4: {
        fontSize: '1rem',
        lineHeight: '1.5em'
      }
    },
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
    MuiButton: {
      root: {
        textTransform: 'capitalize'
      },
      label: {
        whiteSpace: 'nowrap'
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
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
      <ThemeProvider theme={theme}>
        <MainNavigation />
        <main className="main-content">
          <Routes />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
