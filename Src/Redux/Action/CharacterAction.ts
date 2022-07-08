import * as types from '../ActionTypes/index';

export function characterResponse(data) {
  console.log('characterResponse::::::::::::::::::');

  return {
    type: types.CHARACTER_RESPONSE,
    payload: data,
  };
}

export function characterRequest() {
  console.log('characterRequest:::::::::');
  return {
    type: types.CHARACTER_REQUEST,
  };
}

export function favouriteData(index) {
  console.log('favouriteData:::::::::::::');
  return {
    type: types.FAVOURITE_DATA,
    index: index,
  };
}
