import {take, takeEvery, takeLatest, all} from 'redux-saga/effects';
import {CharacterSaga} from './CharacterSaga';

export default function* root_saga() {
  yield all([takeEvery('CHARACTER_REQUEST', CharacterSaga)]);
}
