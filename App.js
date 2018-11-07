/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  StatusBar,
  Image
} from "react-native";
import { createStackNavigator, DrawerNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import CategoryScreen from "./screens/CategoryScreen";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const Routers = DrawerNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen },
  Category: { screen: CategoryScreen }
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle("dark-content");

    StatusBar.setBackgroundColor("transparent");
  }

  render() {
    return <Routers />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1B1915"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
