/*
 *
 * Search actions
 *
 */

import { ENTERED_SEARCHTERM, FETCHING, RECEIVED, OFFLINE } from './constants';

export function enteredSearchTerm(searchTerm) {
  return {
    type: ENTERED_SEARCHTERM,
    payload: searchTerm,
  };
}

export function fetching(isFetching) {
  return {
    type: FETCHING,
    payload: isFetching,
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
