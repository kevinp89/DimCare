import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from './components/Container';
import Button from './components/Button';
import Label from './components/Label';

import LoginView from '../index.ios';
//The main home page
export class ProfileView extends Component {
    constructor (props) {
        super(props);
        this.state = {
            signedin: false
        };
    }

    componentDidUpdate() {
        if(this.state.signedIn) {
        this.props.navigator.replace({
          component: LoginView,
          title: 'LoginView',
        })
      }
    }

    componentDidMount() {
        if(this.state.signedIn) {
        this.props.navigator.replace({
          component: LoginView,
          title: 'LoginView',
        })
      }
    }

    changeView() {
        this.setState({
        signedIn: true
      });
    }

    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#42bff4'}}>
                <Text style={{alignItems: 'center', justifyContent: 'center', fontSize: 30}}>
                    Welcome To Care
                </Text>
                <TouchableHighlight
                    label="SignIn"
                    style={styles.signInButton}

                    onPress={ () => this.changeView() } >
                    <Text style={styles.submitText}>
                    SignIn
                    </Text>

                  </TouchableHighlight>


            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#42bff4',
     padding: 30,
     flexDirection: 'column',
    // justifyContent: 'center', //moves stuff hight wise
    // alignItems: 'center',
  },
  logincontainer: {
    flex:1,
    backgroundColor: '#42bff4',
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center', //moves stuff hight wise
    alignItems: 'center',
  },
  links: {
    // height: 80,
    // width: 210,
    fontSize : 80,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  textInput: {
    height: 80,
    width: 210,
    backgroundColor: '#42bff4',
    borderBottomWidth: 1,
    borderBottomColor: '#070c28'
},
  textInputSize: {
    height: 80,
    width: 210,
    fontSize : 30
  },
  buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856'
},
signInButton: {

  marginRight:30,
  marginLeft:30,
  marginTop:10,
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:'#42d4f4',
  borderRadius:10,
  borderWidth: 1,

    borderColor: '#42d4f4'
},
submitText: {
  color:'#fff',
     textAlign:'center',
     fontSize: 40
},
primaryButton: {
    backgroundColor: '#34A853'
},
footer: {
   marginTop: 100
}
});

module.exports = ProfileView;
