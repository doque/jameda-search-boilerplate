import {
  take,
  call,
  cancel,
  put,
  select,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';
import request from 'utils/request';

import { makeSelectSearchTerm } from 'containers/Search/selectors';

import { FETCHING, RECEIVED, OFFLINE } from './constants';
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
  }
}

export function* suggestionData() {
  const watcher = yield takeEvery(FETCHING, getSuggestions);
  yield take(RECEIVED);
  yield take(OFFLINE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [suggestionData];
