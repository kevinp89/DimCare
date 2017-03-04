

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
import Container from './src/components/Container';
import Button from './src/components/Button';
import Label from './src/components/Label';

// import loginPage from './src/loginPage'


export default class app extends Component {
  render() {
    return (
      //home page:
      <NavigatorIOS
      style = {styles.container}
              initialRoute={{
            title: "HomePage",
            navigationBarHidden: true,
            component : ProfileView
            //define component later
          }}
      />

    );
  }
}

//The main home page
class ProfileView extends Component {
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

    //to register view
    changeRegisterView(){
      this.props.navigator.replace({
        component: RegisterView,
        title: 'RegisterView'
      })
    }


    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#42bff4'}}>
                <Text style={{alignItems: 'center', justifyContent: 'center', fontSize: 30}}>
                    Welcome To DimCare
                </Text>
                <TouchableHighlight
                    label="LogIn"
                    style={styles.signInButton}

                    onPress={ () => this.changeView() } >
                    <Text style={styles.submitText}>
                    LogIn
                    </Text>

                  </TouchableHighlight>

                  <TouchableHighlight
                      label = "Register"
                      style = {styles.RegisterButton}

                      onPress={ () => this.changeRegisterView()} >
                      <Text style={styles.submitText}>
                      Register
                      </Text>

                  </TouchableHighlight>

            </View>
        );
    }
};

//The login View.
class LoginView extends Component{


  changetheView() {
      this.props.navigator.replace({
        component: ProfileView,
        title: 'ProfileView'
      })
    };


  render(){
    return(
    <View style={styles.logincontainer}>
        <Container>
          <Label text="Username or Email" />
          <View style={styles.textInput}>
            <TextInput
              style={styles.textInputSize}
            />
            </View>
        </Container>
        <Container>
          <Label text="Password" />
          <View style={styles.textInput}>
            <TextInput
            style={styles.textInputSize}
                secureTextEntry={true}
            />
            </View>
        </Container>
        <Container>
            <Button
                label="Sign In"
                styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
                //onPress={this.press.bind(this)}
                 />
        </Container>
        <Container>
            <Button
                label="CANCEL"
                styles={{label: styles.buttonBlackText}}
                onPress={ () => this.changetheView() }
                //onPress={this.press.bind(this)}
                />
        </Container>
    </View>
  );
  }
}


class RegisterView extends Component{
  render(){
    return (
      <View style={{flex:1, backgroundColor:'#42bff4'}}>
      <TouchableHighlight
          label = "Submit"
          style = {styles.submitButon}

          onPress={ () => this.changeRegisterView()} >
          <Text style={styles.submitText}>
          Submit
          </Text>

      </TouchableHighlight>
      </View>
    )
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
  backgroundColor:'#0072ff',
  borderRadius:10,
  borderWidth: 1,
    borderColor: '#0072ff'
},
submitText: {
  color:'#fff',
     textAlign:'center',
     fontSize: 40
},

RegisterButton : {
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
submitButon: {

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

primaryButton: {
    backgroundColor: '#34A853'
},
footer: {
   marginTop: 100
}
});

AppRegistry.registerComponent('app', () => app);
