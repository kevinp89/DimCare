//import the code we need
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DayItem from './src/day-item';

// var Text = React.Text;
// var View = React.View;
var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//creat a react component
export default class myProject extends Component{
  render() {
    return <View style={styles.container} >
      <Text>
         Days of the week:
      </Text>
      {this.days()}
    </View>
  }
  days(){
    return DAYS.map(function(day){
      //will be called 7 times
      return <DayItem day={day} />
    }); // array of DayItem components.
  }
};

//style component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row', //row flips the justify to be width and align to be height.
    justifyContent: 'center', //moves stuff hight wise
    alignItems: 'center', //moves stuff width wise.
  },
});

//show the react component on the screen
AppRegistry.registerComponent('myProject', () => myProject);
