/*
 *
 * Search actions
 *
 */

import {
  ENTERED_SEARCHTERM,
  REQUESTED_SUGGESTIONS,
  RECEIVED_SUGGESTIONS,
  OFFLINE,
  FETCHING,
} from './constants';

export function enteredSearchTerm(dispatch, searchTerm) {
  dispatch(isFetching());
  dispatch(requestedSuggestions());
  return {
    type: ENTERED_SEARCHTERM,
    payload: searchTerm,
  };
}

export function isFetching() {
  return {
    type: FETCHING,
  };
}

export function requestedSuggestions() {
  return {
    type: REQUESTED_SUGGESTIONS,
  };
}

export function receivedSuggestions(suggestions) {
  return {
    type: RECEIVED_SUGGESTIONS,
    payload: suggestions,
  };
}

export function offline(isOffline) {
  return {
    type: OFFLINE,
    payload: isOffline,
  };
}
