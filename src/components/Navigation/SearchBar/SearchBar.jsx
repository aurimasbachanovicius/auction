import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const categories = [
  {
    value: 'All',
    label: 'All Categories'
  },
  {
    value: 'Computers',
    label: 'Computers'
  },
  {
    value: 'Phones',
    label: 'Phones'
  },
  {
    value: 'Books',
    label: 'Books'
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(6),
    transition: 'box-shadow 200ms ease-in',
    border: '1px solid #DEDEDE',
    borderRadius: 4,
    height: 40,
    padding: '2px 4px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.only('xs')]: {
      marginLeft: theme.spacing(0)
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: 3
  },
  menu: {
    width: 200
  },
  input: {
    marginLeft: 8,
    flex: 6,
    color: 'inherit',
    '&:focus': {
      zIndex: 1000
    }
  },
  iconButton: {
    padding: 6
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
}));

function SearchBar() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    category: 'All'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Paper className={classes.root}>
      <Grid container alignItems="stretch">
        <TextField
          select
          label=""
          className={classes.textField}
          value={values.category}
          onChange={handleChange('category')}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          InputProps={{
            disableUnderline: true
          }}
        >
          {categories.map(option => (
            <MenuItem key={option.value} value={option.value} button="">
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Divider className={classes.divider} />
        <InputBase className={classes.input} placeholder="Search item..." />
        <IconButton className={classes.iconButton} aria-label="Search" href="">
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} />
        <IconButton className={classes.iconButton} aria-label="Directions" href="">
          <SettingsIcon />
        </IconButton>
      </Grid>
    </Paper>
  );
}

export default SearchBar;
