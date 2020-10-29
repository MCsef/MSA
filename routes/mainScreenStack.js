import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from "../screens/MainScreen";
import ContactScreen from "../screens/ContactScreen";

const screens = {
  MainScreen: { screen: MainScreen },
  ContactScreen: { screen: ContactScreen },
}

const MainScreenStack=createStackNavigator(screens);

export default createAppContainer(MainScreenStack);
