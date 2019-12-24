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
      gutters: {
        '@media (max-width: 600px)': {
          paddingLeft: '0px',
          paddingRight: '0px'
        }
      }
    },
    MuiPaper: {
      root: {
        color: 'inherit'
      }
    },
    MuiButton: {
      root: {
        color: 'inherit',
        padding: '8px 16px',
        textTransform: 'initial',
        '&:hover': {
          backgroundColor: 'inherit',
          border: 'default'
        }
      },
      outlined: {
        padding: '8px 16px'
      },
      label: {
        whiteSpace: 'nowrap'
      },
      text: {
        padding: '8px'
      }
    },
    MuiIconButton: {
      root: {
        color: 'inherit',
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiInputBase: {
      root: {
        color: 'inherit'
      },
      input: {
        padding: '7px 0'
      }
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 13px) scale(1)'
      }
    },
    MuiOutlinedInput: {
      input: {
        paddingTop: 11,
        paddingBottom: 11
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: '20px'
      }
    },
    MuiListItem: {
      root: {
        paddingTop: '0px',
        '&$selected': {
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        },
        '&:hover': {
          backgroundColor: 'transparent',
          textDecoration: 'underline',
          cursor: 'pointer'
        }
      },

      button: {
        '&:hover': {
          backgroundColor: 'white',
          textDecoration: 'underline'
        }
      },
      gutters: {
        paddingLeft: '0px',
        paddingRight: '0px'
      }
    },
    MuiListItemText: {
      root: {
        marginTop: '0px',
        marginBottom: '0px'
      }
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }
      }
    },
    PrivateSwitchBase: {
      root: {
        paddingTop: '3px',
        paddingBottom: '3px',
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    PrivateValueLabel: {
      label: {
        color: '#484848'
      },
      circle: {
        height: 42,
        backgroundColor: 'transparent'
      },
      offset: {
        fontSize: '0.85rem'
      }
    },
    MuiCardActionArea: {
      focusHighlight: {
        display: 'none'
      }
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
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
