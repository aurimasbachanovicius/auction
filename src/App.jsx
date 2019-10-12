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
      sm: 600,
      md: 1060
    }
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: '0.875rem'
      },
      h4: {
        fontSize: '1rem',
        lineHeight: '1.5em'
      }
    },
    MuiGrid: {
      item: {
        padding: '0px'
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
      },
      gutters: {
        '@media (max-width: 600px)': {
          paddingLeft: '0px',
          paddingRight: '0px'
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
    },
    MuiListItemIcon: {
      root: {
        minWidth: '20px'
      },
      gutters: {
        paddingRight: '0px'
      }
    },
    MuiListItem: {
      root: {
        paddingTop: '0px',
        paddingBottom: '0px'
      }
    },
    MuiListItemText: {
      root: {
        marginTop: '0px',
        marginBottom: '0px'
      }
    },
    PrivateSwitchBase: {
      root: {
        paddingTop: '4px',
        paddingBottom: '4px'
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
