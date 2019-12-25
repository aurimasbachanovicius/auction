import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Logo from 'assets/logo/logo_transparent.png';
import Search from 'components/Navigation/SearchBar';
import ToolbarMenu from 'containers/UserMenu';
import SellNowButton from 'components/Navigation/SellNowButton';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1)
  },
  logo: {
    height: 40,
    display: 'flex'
  },
  search: {
    position: 'relative',
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(1)
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(5)
    }
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionOneRow: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionTwoRows: {
    display: 'flex',
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

function HideOnScroll(props) {
  const { children, scrollWindow } = props;
  const trigger = useScrollTrigger({ target: scrollWindow ? window() : undefined });

  // If 770px window size value is changed, then also change it for Advanced filters in AdvancedFilters.jsx
  // Advanced Filters are binded to Main Navigation (disappears on scroll without leaving a weird gap)
  return window.innerWidth <= 770 ? (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  ) : (
    <Slide appear={false} direction="down" in={true}>
      {children}
    </Slide>
  );
}

export default function MainNavigation(props) {
  const classes = useStyles();

  const logo = (
    <Link to="/">
      <img src={Logo} alt="logo" className={classes.logo} />
    </Link>
  );

  const search = (
    <div className={classes.search}>
      <Search />
    </div>
  );

  const buttons = (
    <div className={classes.buttons}>
      <ToolbarMenu />
      <SellNowButton />
    </div>
  );

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar position="fixed" color="inherit">
          <Toolbar className={classes.sectionOneRow}>
            {logo}
            {search}
            {buttons}
          </Toolbar>
          <Toolbar className={classes.sectionTwoRows}>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item md={4}>
                {logo}
              </Grid>
              <Grid item md={8}>
                {buttons}
              </Grid>
              {search}
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
