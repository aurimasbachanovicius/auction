import React from 'react';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    minWidth: 120,
    borderBottom: '1px solid #e4e4e4'
  }
}));

const AdvancedFilters = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box>
      <FormControl className={classes.formControl}>
        <Typography
          className={classes.itemDescriptionBold}
          gutterBottom
          variant="h4"
          component="h4"
        >
          Kategorijos
        </Typography>
        <List>
          {['Džemperiai (15)', 'Nešiojamieji kompiuteriai (0)'].map(value => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem key={value} role={undefined} button onClick={handleToggle(value)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    color="default"
                  />
                </ListItemIcon>
                <ListItemText id={labelId} secondary={`${value}`} />
              </ListItem>
            );
          })}
        </List>
      </FormControl>
    </Box>
  );
};

export default AdvancedFilters;
