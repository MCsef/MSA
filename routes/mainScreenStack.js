import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from "../screens/MainScreen";
import ContactScreen from "../screens/ContactScreen";
import LoginScreen from "../screens/LoginScreen";
import UserProfileScreen from "../screens/UserProfileScreen";
import SignUpScreen from "../screens/SignUpScreen";
import RoomsScreen from "../screens/RoomsScreen";
import ProfileInoScreen from "../screens/ProfileInfoScreen";
import AboutScreen from "../screens/AboutScreen";
import BookingsScreen from "../screens/BookingsScreen";
import PricesScreen from "../screens/PricesScreen";
import CorporateScreen from "../screens/CorporateScreen";
import EventsScreen from "../screens/EventsScreen";
import PartiesScreen from "../screens/PartiesScreen";

const screens = {
  MainScreen: { screen: MainScreen },
  ContactScreen: { screen: ContactScreen },
  LoginScreen: { screen: LoginScreen },
  UserProfileScreen: { screen: UserProfileScreen },
  SignUpScreen: { screen: SignUpScreen },
  RoomsScreen: { screen: RoomsScreen },
  ProfileInfoScreen: { screen: ProfileInoScreen },
  AboutScreen: { screen: AboutScreen },
  BookingsScreen: { screen: BookingsScreen },
  PricesScreen: { screen: PricesScreen },
  CorporateScreen: { screen: CorporateScreen },
  EventsScreen: { screen: EventsScreen },
  PartiesScreen: { screen: PartiesScreen }
}

const MainScreenStack=createStackNavigator(screens);

export default createAppContainer(MainScreenStack);
