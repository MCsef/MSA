import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from "../screens/MainScreen";
import ContactScreen from "../screens/ContactScreen";
import LoginScreen from "../screens/LoginScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import SignUpScreen from "../screens/SignUpScreen";
import RoomsScreen from "../screens/RoomsScreen";

const screens = {
  MainScreen: { screen: MainScreen },
  ContactScreen: { screen: ContactScreen },
  LoginScreen: { screen: LoginScreen },
  UserProfileScreen: { screen: UserProfileScreen },
  SignUpScreen: { screen: SignUpScreen },
  RoomsScreen: { screen: RoomsScreen }
}

const MainScreenStack=createStackNavigator(screens);

export default createAppContainer(MainScreenStack);
