import {put, call} from 'redux-saga/effects';
import {characterResponse} from '../Action/CharacterAction';

import {LoaderAction} from '../Action/LoaderAction';
export function* CharacterSaga(action) {
  console.log('action====', action);

  try {
    const response = yield fetch(
      `https://www.breakingbadapi.com/api/characters`,
      {method: 'GET'},
    );

    let responseJson = yield response.json();

    yield put(characterResponse(responseJson));
    yield put(LoaderAction(false));
  } catch (err) {
    console.log('error:::');
    yield put(LoaderAction(false));
  }
}
