
import { takeLatest, put, delay, select } from "redux-saga/effects";
import selectors from '../selectors';

function* ageUpAsync(action) {
    const gender = yield select(selectors.getGender);

    console.log(gender);
    
    yield delay(0);
    yield put({ type: "AGE_UP_ASYNC", value: action.value });
    yield put({ type: "CHNAGE_GENDER", value: 'female' });
}

function* ageDownAsync(action) {
    yield delay(0);
    yield put({ type: "AGE_DOWN_ASYNC", value: action.value });
}

export const ageSagas = [
    takeLatest("AGE_DOWN", ageDownAsync),
    takeLatest("AGE_UP", ageUpAsync),
];