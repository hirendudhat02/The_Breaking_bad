import {
  CHARACTER_REQUEST,
  CHARACTER_RESPONSE,
  FAVOURITE_DATA,
} from '../ActionTypes/index';

const initialState = {
  data: null,
};

export const CharacterReducer = (state = initialState, action) => {
  console.log('call CharacterReducer');

  const prevState = {...state};
  const {type} = action;

  switch (type) {
    case CHARACTER_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case CHARACTER_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
    case FAVOURITE_DATA:
      console.log('action.index::::', action.index);

      var temp = state.data;

      if (temp[action.index].fav === undefined) {
        temp[action.index] = {...temp[action.index], fav: true};
      } else {
        if (temp[action.index].fav) {
          temp[action.index].fav = false;
        } else {
          temp[action.index].fav = true;
          temp.push(...temp);
        }
        return {
          ...prevState,
          data: temp,
        };
      }
  }
  return prevState;
};
