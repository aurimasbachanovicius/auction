import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const PopularSearches = ({ searches }) => (
  <Grid container>
    Popular Searches:
    {searches.slice(0, 10).map(search => (
      <a className="ml-3" href={`?search=${search}`}>
        {search}
      </a>
    ))}
  </Grid>
);

PopularSearches.propTypes = {
  searches: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PopularSearches;
