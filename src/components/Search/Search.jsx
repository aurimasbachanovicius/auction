import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ categories }) => (
  <form className="form-inline">
    <div className="input-group input-group-lg" style={{ width: `${100}%` }}>
      {/* <select
        className="form-control rounded-0"
        id="categories"
        style={{ width: `${10}%` }}
      >
        <option selected>All</option>
        {categories.map(category => (
          <option>{category}</option>
        ))}
      </select> */}
      <select
        class="selectpicker"
        data-style="btn btn-primary btn-round"
        title="Single Select"
        data-size="7"
      >
        <option disabled selected>
          Choose city
        </option>
        <option value="2">Foobar</option>
        <option value="3">Is great</option>
      </select>
      <input
        type="text"
        className="form-control rounded-0"
        id="search-query"
        placeholder="Search..."
        style={{ width: `${50}%` }}
      />
      <button
        type="button"
        className="btn btn-lg btn-primary rounded-0 border-right"
      >
        Search
      </button>
    </div>
  </form>
);

Search.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Search;
