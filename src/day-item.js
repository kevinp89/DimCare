//import some components
import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

//creat component
export default class DayItem extends Component{
  render(){
    return <Text style={styles.day}>
      {this.props.day}
    </Text>
  }

}

//stype component
var styles = StyleSheet.create({
    day : {
      fontSize : 18,
      color: '#0000FF'
    }

})

//make this code avail elsewhere.
module.exports = DayItem;
