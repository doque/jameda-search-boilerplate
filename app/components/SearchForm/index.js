import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchTerm, onSubmitForm, onChangeSearchTerm }) =>
  <form onSubmit={onSubmitForm}>
    <label htmlFor="what">
      Was:
      <input
        type="text"
        className="input-field"
        name="what"
        onChange={onChangeSearchTerm}
        value={searchTerm}
      />
    </label>
  </form>;

SearchForm.propTypes = {
  searchTerm: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeSearchTerm: PropTypes.func,
};

export default SearchForm;
