import React from 'react';
import {Animated, Dimensions, View} from 'react-native';

/*const QuesCardSection = (props) => {
return(

    <View style={styles.containerStyle}>
      {props.children}
    </View>
);

};

const styles = {
  containerStyle:{
    borderBottomWidth:1,
    padding: 5,
    backgroundColor:'#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'

  }
};
export default QuesCardSection;*/
const Card = props => {
  return (
      <View style={styles.scrollPage}>
        <Animated.View style={[styles.screen]}>
          {props.children}
        </Animated.View>
      </View>
  );
};
const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = {
  scrollPage: {
    width: SCREEN_WIDTH,
    paddingRight:10

  },
  screen: {
    //justifyContent: "center",
    //alignItems: "center",
  },
  text: {
    // fontSize: 45,
    //fontWeight: "bold"
  }
};

export default Card;