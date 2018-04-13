import React, { Component } from "react";
import { Text, View, Animated, Dimensions} from "react-native";

const xOffset = new Animated.Value(0);
const SCREEN_WIDTH = Dimensions.get("window").width;
class FinishScreen extends Component{
  state = { questions: [
      {
        QCount:"Question 1/10",
        Ques: "Which number should come next in the pattern?",
        aOption: "23",
        bOption: "27",
        cOption: "25",
        dOption: "30",
        eOption: "22",
        image: {
          uri: require('./ques.jpg')
        }
      },
      {
        QCount:"Question 2/10",
        Ques: "Which one of the five choices makes the best comparison?",
        aOption: "25641",
        bOption: "26451",
        cOption: "12654",
        dOption: "51462",
        eOption: "15264",
        image: {
          uri: require('./ques.jpg')
        }
      },
      {
        QCount:"Question 3/10",
        Ques: "1, 15, 3, 21, 6, 28, ? ",
        aOption: "11",
        bOption: "10",
        cOption: "15",
        dOption: "18",
        eOption: "9",
        image: {
          uri: require('./ques.jpg')
        }
      }]

  };
  render() {
    return (
        <View>
          <Text>Deneme</Text>
        </View>



    );
  }
}
FinishScreen.navigationOptions = {
  title: "Finish Screen"
};


export default  FinishScreen;
