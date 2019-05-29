import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ categories }) => (
  <form className="form-inline">
    <div className="input-group input-group-lg" style={{ width: `${100}%` }}>
      <input
        type="text"
        className="form-control rounded-0"
        id="search-query"
        placeholder="Search..."
        style={{ width: `${40}%` }}
      />
      <select className="form-control rounded-0" id="categories">
        <option selected>Categories</option>
        {categories.map(category => (<option>{category}</option>))}
      </select>
      <button type="button" className="btn btn-lg btn-primary rounded-0 border-right">Search</button>
      <button type="button" className="btn btn-lg btn-primary rounded-0">Filters</button>
    </div>
  </form>
);

Search.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Search;
