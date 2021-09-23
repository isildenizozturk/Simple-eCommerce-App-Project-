import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Home from './src/screens/Home';
import Cart from './src/screens/ShoppingBasket';
import ItemDetail from './src/screens/ItemDetail';
import SearchScreen from './src/screens/SearchScreen';



const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Welcome: Welcome,
    Login: Login,
    Signup: Signup,
  }),
  mainFlow: createBottomTabNavigator({
    Home: Home,
    Cart: Cart,
    SearchScreen: SearchScreen,
  }),
  ItemDetail: ItemDetail,

});


const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
