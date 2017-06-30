import { createSelector } from 'reselect';

/**
 * Direct selector to the search state domain
 */
const selectSearchDomain = () => (state) => state.get('search');

/**
 * Default selector used by Search
 */

const makeSelectSearchTerm = () =>
  createSelector(selectSearchDomain(), (searchState) =>
    searchState.get('searchTerm')
  );

const makeSelectIsOffline = () =>
  createSelector(selectSearchDomain(), (searchState) =>
    searchState.get('offline')
  );

const makeSelectIsFetching = () =>
  createSelector(selectSearchDomain(), (searchState) =>
    searchState.get('offline')
  );

const makeSelectSuggestions = () =>
  createSelector(selectSearchDomain(), (searchState) =>
    searchState.get('suggestions')
  );

export {
  selectSearchDomain,
  makeSelectSearchTerm,
  makeSelectIsOffline,
  makeSelectIsFetching,
  makeSelectSuggestions,
};