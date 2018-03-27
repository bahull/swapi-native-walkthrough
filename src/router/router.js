import React from "react";

import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import AllCharacters from "./../components/AllCharacters";
import CharacterDetails from "./../components/CharacterDetails";
import AppDetails from "./../components/AppDetails";

export const Chars = StackNavigator({
  Characters: {
    screen: AllCharacters,
    navigationOptions: {
      title: "Characters"
    }
  },
  ChararDetails: {
    screen: CharacterDetails,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  }
});

export const AppDeets = StackNavigator({
  Details: {
    screen: AppDetails,
    navigationOptions: {
      title: "Details"
    }
  }
});
export const RootRouter = TabNavigator({
  AllChar: {
    screen: Chars,
    navigationOptions: {
      //   tabBarLabel: "Characters",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="list" size={35} color={tintColor} />
      )
    }
  },
  AddDetails: {
    screen: AppDeets,
    navigationOptions: {
      tabBarLabel: "App Details",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="account-circle" size={35} color={tintColor} />
      )
    }
  }
});

// export const RootRouter = StackNavigator({
//   Tabs: {
//     screen: Tabs
//   }
// });
