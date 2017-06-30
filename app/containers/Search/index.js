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
import { enteredSearchTerm } from './actions';

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
  changeHandler,
}) =>
  <SearchForm searchTerm={searchTerm} changeHandler={changeHandler}>
    {isFetching && <LoadingIndicator />}
    {!isFetching && isOffline && <OfflineIndicator />}
    <SuggestionList {...suggestions} />
  </SearchForm>;

Search.propTypes = {
  searchTerm: PropTypes.string,
  isOffline: PropTypes.bool,
  isFetching: PropTypes.bool,
  suggestions: PropTypes.array,
  changeHandler: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  searchTerm: makeSelectSearchTerm(),
  suggestions: makeSelectSuggestions(),
  isFetching: makeSelectIsFetching(),
  isOffline: makeSelectIsOffline(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeHandler: (evt) =>
      dispatch(enteredSearchTerm(dispatch, evt.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
