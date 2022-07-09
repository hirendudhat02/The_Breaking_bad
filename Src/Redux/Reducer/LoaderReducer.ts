import {LOADER} from '../ActionTypes/index';

const initialState = {
  loader: false,
};

export const LoaderReducer = (state = initialState, action) => {
  console.log('Login Reducer call-------------');
  const prevState = {...state};
  const {type} = action;

  switch (type) {
    case LOADER:
      return {
        ...prevState,
        loader: action.loader,
      };
  }
  return prevState;
};
