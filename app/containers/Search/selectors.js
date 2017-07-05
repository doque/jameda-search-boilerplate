import { createSelector } from 'reselect';
import { List } from 'immutable';

/**
 * Direct selector to the search state domain
 */
const selectSearchDomain = (state) => state.get('search');

/**
 * Default selector used by Search
 */

const makeSelectSearchTerm = () =>
  createSelector([selectSearchDomain], (searchState) =>
    searchState.get('searchTerm')
  );

const makeSelectIsOffline = () =>
  createSelector([selectSearchDomain], (searchState) =>
    searchState.get('isOffline')
  );
const makeSelectIsFetching = () =>
  createSelector([selectSearchDomain], (searchState) =>
    searchState.get('isFetching')
  );

const makeSelectSuggestions = () =>
  createSelector([selectSearchDomain], (searchState) =>
    searchState.get('suggestions').toJS()
  );

export {
  selectSearchDomain,
  makeSelectSearchTerm,
  makeSelectIsOffline,
  makeSelectIsFetching,
  makeSelectSuggestions,
};
