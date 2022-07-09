import {combineReducers} from 'redux';
import {CharacterReducer} from './CharacterReducer';
import {LoaderReducer} from './LoaderReducer';

export default combineReducers({
  charReducer: CharacterReducer,
  loader: LoaderReducer,
});
