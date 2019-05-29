import React from 'react';
import PropTypes from 'prop-types';

const PopularSearches = ({ searches }) => (
  <div className="row mt-4">
    <div className="col">
      Popular Searches:
      {searches.slice(0, 10).map(search => (
        <a className="ml-3" href={`?search=${search}`}>
          {search}
        </a>
      ))}
    </div>
  </div>
);

PopularSearches.propTypes = {
  searches: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PopularSearches;
