/*
 *
 * Search reducer
 *
 */

import { fromJS } from 'immutable';
import { ENTERED_SEARCHTERM, FETCHING, RECEIVED, OFFLINE } from './constants';

const initialState = fromJS({
  searchTerm: '',
  isOffline: false,
  isFetching: false,
  suggestions: [],
});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case ENTERED_SEARCHTERM:
      return state.set('searchTerm', action.payload);

    case FETCHING:
      return state.set('isFetching', action.payload);

    case RECEIVED:
      return state.set('suggestions', action.payload).set('fetching', false);

    case OFFLINE:
      return state.set('isOffline', action.paylod);

    default:
      return state;
  }
}

export default searchReducer;
