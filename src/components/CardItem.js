import React from 'react';
import { View ,ScrollView,Animated} from 'react-native';
import QuesScreen from "./QuesScreen";
import AnimatedHeaderScrollView from 'react-native-animated-header-scroll-view';

const CardItem = (props) => {
  const { containerStyle } = styles;
  return(
      <View style = {containerStyle}>
        {props.children}
      </View>
  );

};

const styles = {
  containerStyle:{
    borderWidth: 1,
    borderRadius: 2,
    //borderColor:'#ddd',
    borderBottomWidth: 0,
    shadowColor:'#ddd',
    shadowOffset:{ width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    borderBottomWidth:1,
    padding: 5,
    backgroundColor:'#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }

};
CardItem.navigationOptions = {
  title: ""
};
export default CardItem;
