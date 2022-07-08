import React from 'react';
import {View} from 'react-native';
import Navigation from './Src/Navigation';
import {Provider} from 'react-redux';
import store from './Src/Redux/Store/store';
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
