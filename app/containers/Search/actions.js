/*
 *
 * Search actions
 *
 */

import { ENTERED_SEARCHTERM, FETCHING, RECEIVED, OFFLINE } from './constants';

export function enteredSearchTerm(dispatch, searchTerm) {
  dispatch(fetching({ payload: true }));
  return {
    type: ENTERED_SEARCHTERM,
    payload: searchTerm,
  };
}

export function fetching() {
  return {
    type: FETCHING,
  };
}

export function received(suggestions) {
  return {
    type: RECEIVED,
    payload: suggestions,
  };
}

export function offline(isOffline) {
  return {
    type: OFFLINE,
    payload: isOffline,
  };
}
