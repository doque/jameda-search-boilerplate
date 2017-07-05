/*
 *
 * Search
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SearchForm from 'components/SearchForm';
import SuggestionList from 'components/SuggestionList';
import LoadingIndicator from 'components/LoadingIndicator';
import OfflineIndicator from 'components/OfflineIndicator';
import { enteredSearchTerm, fetching } from './actions';

import {
  makeSelectSearchTerm,
  makeSelectIsOffline,
  makeSelectIsFetching,
  makeSelectSuggestions,
} from './selectors';

const Search = ({
  searchTerm,
  isOffline,
  isFetching,
  suggestions,
  onSubmitForm,
  onChangeSearchTerm,
}) =>
  <SearchForm
    searchTerm={searchTerm}
    onChangeSearchTerm={onChangeSearchTerm}
    onSubmitForm={onSubmitForm}
  >
    {isFetching && <LoadingIndicator />}
    {isOffline && <OfflineIndicator />}
    <SuggestionList suggestions={suggestions} />
  </SearchForm>;

Search.propTypes = {
  searchTerm: PropTypes.string,
  isOffline: PropTypes.bool,
  isFetching: PropTypes.bool,
  suggestions: PropTypes.array,
  onSubmitForm: PropTypes.func,
  onChangeSearchTerm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  searchTerm: makeSelectSearchTerm(),
  suggestions: makeSelectSuggestions(),
  isFetching: makeSelectIsFetching(),
  isOffline: makeSelectIsOffline(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeSearchTerm: (evt) => {
      dispatch(enteredSearchTerm(evt.target.value));
    },
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(fetching(true));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
