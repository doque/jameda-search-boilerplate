/*
 *
 * Search reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ENTERED_SEARCHTERM,
  REQUESTED_SUGGESTIONS,
  RECEIVED_SUGGESTIONS,
  OFFLINE,
} from './constants';

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

    case REQUESTED_SUGGESTIONS:
      return state.set('isFetching', true);

    case RECEIVED_SUGGESTIONS:
      return state.set('suggestions', action.payload);

    case OFFLINE:
      return state.set('offline', action.paylod);

    default:
      return state;
  }
}

export default searchReducer;
