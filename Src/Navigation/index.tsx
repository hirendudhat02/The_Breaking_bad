import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Container/Home';
import Favourite from '../Container/Favourites';
import Search from '../Container/Search';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Favourite" component={Favourite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
