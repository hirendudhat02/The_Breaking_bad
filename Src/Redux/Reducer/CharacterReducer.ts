import {
  CHARACTER_REQUEST,
  CHARACTER_RESPONSE,
  FAVOURITE_DATA,
} from '../ActionTypes/index';

const initialState = {
  data: null,
};

export const CharacterReducer = (state = initialState, action) => {
  console.log('call DashboardReducer');
  console.log('initialState>>>>>>>>>>>>>', initialState);
  console.log('initialState>>>>>>>>>>>>>', initialState.data);
  console.log('action>>>>>>>>>>>>>', action);
  // console.log('action>>>>>>>>>>>>>', action.index);
  // console.log('action>>>>>>>>>>>>>', action.item);
  console.log('state.action>>>>>>>>>>>>>', state[action.payload]);
  console.log('state.action>>>>>>>>>>>>>', action.payload);

  console.log('state[action.index]>>>>>>>>>>>>>', state[action.index]);
  console.log('state[action.index]>>>>>>>>>>>>>', state[action.item]);

  const prevState = {...state};
  const {type} = action;

  switch (type) {
    case CHARACTER_REQUEST:
      console.log('CharacterReducer request action call::::', action);
      console.log('CharacterReducer request state call::::', state);

      return {
        ...prevState,
        action: action,
      };
    case CHARACTER_RESPONSE:
      console.log('CharacterReducer response action call::::', action);
      console.log('CharacterReducer response state call::::', state);

      return {
        ...prevState,
        data: action.payload,
      };
    case FAVOURITE_DATA:
      console.log('initialState::::', initialState);
      console.log('action.index::::', action.index);

      console.log(
        'FAVOURITE_DATA response state call::::',
        JSON.stringify(state),
      );

      if (action.index.fav === undefined) {
        action.index = {...state[action.index], fav: true};
      } else {
        if (action.index.fav) {
          action.index.fav = false;
        } else {
          action.indexfav = true;
        }
        return {
          ...prevState,
          data: action.index,
        };
      }
  }
  return prevState;
};
