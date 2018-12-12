import exampleApiCallSaga from './exampleApiCallSaga';
import { all, fork } from 'redux-saga/effects';

// We `fork()` these tasks so they execute in the background.
export function* rootSaga() {
    yield all([
      fork(exampleApiCallSaga)
    ])
  }