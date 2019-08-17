import { all } from 'redux-saga/effects';
import { ageSagas } from './ageSaga';

function *watchAll() {
    yield all([
        ...ageSagas,
    ]);
  }

export default watchAll;
