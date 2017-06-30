import { call, cancel, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { makeSelectSearchTerm } from 'containers/Search/selectors';

import { FETCHING } from './constants';
import { received, fetching, offline } from './actions';

// Individual exports for testing
export function* getSuggestions() {
  const searchTerm = yield select(makeSelectSearchTerm());
  const requestUrl = `https://jameda.localtunnel.me/suche.jameda-elements.de/what-new?query=${searchTerm}`;

  try {
    yield put(fetching({ payload: true }));
    const suggestions = yield call(request, requestUrl);
    yield put(received({ payload: suggestions }));
    yield put(fetching({ payload: false }));
  } catch (error) {
    put(offline({ payload: true }));
    put(fetching({ payload: false }));
  }
}

export function* suggestionData() {
  const watcher = yield takeLatest(FETCHING, getSuggestions);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [suggestionData];
