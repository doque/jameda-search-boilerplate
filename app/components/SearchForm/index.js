import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchTerm, changeHandler }) =>
  <div>
    <label htmlFor="what">
      Was:
      <input
        type="text"
        className="input-field"
        name="what"
        value={searchTerm}
        onChange={(e) => {
          changeHandler(e);
        }}
      />
    </label>
  </div>;

SearchForm.propTypes = {
  searchTerm: PropTypes.string,
  changeHandler: PropTypes.func,
};

export default SearchForm;
