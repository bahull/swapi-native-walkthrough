import React from "react";

import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import AllCharacters from "./../components/AllCharacters";
import CharacterDetails from "./../components/CharacterDetails";
import AppDetails from "./../components/AppDetails";

export const Chars = StackNavigator({
  Characters: {
    screen: AllCharacters,
    navigationOptions: ({ navigation }) => {
      title: "Characters";
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
      tabBarLabel: "Characters",
      tabBarIcon: () => <Icon name="list" size={35} color={"blue"} />
    }
  },
  AddDetails: {
    screen: AppDeets,
    navigationOptions: {
      tabBarLabel: "App Details",
      tabBarIcon: () => <Icon name="account-circle" size={35} color={"blue"} />
    }
  }
});
