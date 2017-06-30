import { call, cancel, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { makeSelectSearchTerm } from 'containers/Search/selectors';

import { REQUESTED_SUGGESTIONS } from './constants';
import {
  requestedSuggestions,
  receivedSuggestions,
  isFetching,
  offline,
} from './actions';

// Individual exports for testing
export function* getSuggestions() {
  const searchTerm = yield select(makeSelectSearchTerm());
  const requestUrl = `https://jameda.localtunnel.me/suche.jameda-elements.de/what-new?query=${searchTerm}`;

  try {
    yield put(requestedSuggestions());
    yield put(isFetching());
    const suggestions = yield call(request, requestUrl);
    yield put(receivedSuggestions(suggestions));
  } catch (error) {
    put(offline(true));
  }
}

export function* suggestionData() {
  const watcher = yield takeLatest(REQUESTED_SUGGESTIONS, getSuggestions);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [suggestionData];
