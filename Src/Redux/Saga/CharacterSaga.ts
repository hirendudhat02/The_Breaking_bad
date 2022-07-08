import {put, call} from 'redux-saga/effects';
import {Alert} from 'react-native';
// import { LoaderAction } from "../Action/LoaderAction";
import {characterResponse} from '../Action/CharacterAction';
// import { adminApiCall } from "../Services/ApiCom";
// import ApiConstants from "../Services/ApiContstants";

export function* CharacterSaga(action) {
  console.log('action====', action);
  const {Data} = action;
  console.log('Data userName======= ', Data);

  try {
    // let bodyData = Data;

    const response = yield fetch(
      `https://www.breakingbadapi.com/api/characters`,
      {method: 'GET'},
    );

    let responseJson = yield response.json();

    console.log('rescall :: ', response);
    console.log('ArticalresponseJson======', responseJson);
    yield put(characterResponse(responseJson));
  } catch (err) {
    console.log('error:::');
    // yield put(LoaderAction(false));
  }
}
