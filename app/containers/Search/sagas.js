import {
  take,
  call,
  cancel,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import request from 'utils/request';

import { makeSelectSearchTerm } from 'containers/Search/selectors';

import { FETCHING, RECEIVED } from './constants';
import { received, fetching, offline } from './actions';

// Individual exports for testing
export function* getSuggestions() {
  const searchTerm = yield select(makeSelectSearchTerm());
  const requestUrl = `https://jameda.localtunnel.me/suche.jameda-elements.de/what-new?query=${searchTerm}`;

  try {
    const suggestions = yield call(request, requestUrl);
    yield put(received(suggestions.suggests));
  } catch (error) {
    yield put(offline(true));
    yield put(fetching(false));
  }
}

export function* suggestionData() {
  const watcher = yield takeLatest(FETCHING, getSuggestions);
  yield take(RECEIVED);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [suggestionData];
