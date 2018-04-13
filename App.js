import React, { Component } from "react";
import { AppRegistry ,ScrollView,View,Text,Animated, Dimensions, StyleSheet} from "react-native";
import StartScreen from './src/components/StartScreen';
import { StackNavigator } from "react-navigation";
import QuesScreen from './src/components/QuesScreen';
import FinishScreen from './src/components/FinishScreen';
import CardItem from './src/components/CardItem';
import QuestionDetail from "./src/components/QuestionDetail";

const reactNavigationSample = props => {
  return <StartScreen navigation={props.navigation} />;
};

reactNavigationSample.navigationOptions = {
  title: "HOME PAGE"
};

const App = StackNavigator({
  Home: { screen: reactNavigationSample },
  QuesScreen: { screen: QuesScreen, title: "Questions" },
  FinishScreen: { screen: FinishScreen, title: "FinishScreen" }
});



export default App;


