

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
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0093c1'}}>
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
          <Text style={{fontSize: 25, color: '#45484c'}}> Email </Text>
          <View style={styles.textInput}>
            <TextInput
              style={styles.textInputSize}
            />
            </View>
        </Container>
        <Container>
          <Text style={{fontSize: 25, color: '#45484c'}}> Password </Text>
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
                styles={{button: styles.cancelButton, label: styles.buttonBlackText}}
                onPress={ () => this.changetheView() }
                //onPress={this.press.bind(this)}
                />
        </Container>
    </View>
  );
  }
}


class RegisterView extends Component{

  changeToPatientInfo(){
    this.props.navigator.replace({
      component: PatientInfoView,
      title: 'PatientInfoView'
    })
  }

  render(){
    return (
      <View style={{flex:1, backgroundColor:'#0093c1', justifyContent: 'center'}}>
      <Container>
        <Text style={{fontSize: 25, color: '#45484c'}}> Name </Text>
        <View style={styles.textInput}>
          <TextInput
            style={styles.textInputSize}
          />
          </View>
      </Container>

      <Container>
        <Text style={{fontSize: 25, color: '#45484c'}}> Email </Text>
        <View style={styles.textInput}>
          <TextInput
            style={styles.textInputSize}
            secureTextEntry={true}
          />
          </View>
      </Container>

      <Container>
        <Text style={{fontSize: 25, color: '#45484c'}}> Password </Text>
        <View style={styles.textInput}>
          <TextInput
            style={styles.textInputSize}
            secureTextEntry={true}
          />
          </View>
      </Container>

      <Container>
        <Text style={{fontSize: 25, color: '#45484c'}}> Phone Number </Text>
        <View style={styles.textInput}>
          <TextInput
            style={styles.textInputSize}
             keyboardType = 'numeric'
          />
          </View>
      </Container>

      <TouchableHighlight
          label = "Next (Patient Info)"
          style = {styles.nextButton}

          onPress={ () => this.changeToPatientInfo()} >
          <Text style={styles.nextText}>
          Next (Patient Info)
          </Text>

      </TouchableHighlight>
      </View>
    )
  }
}

//Patient View
class PatientInfoView extends Component{

  changeToFamilyInfo(){
    this.props.navigator.replace({
      component: FamilyInfoView,
      title: 'FamilyInfoView'
    })
  }

  render(){
    return (
      <View style={{flex:1, backgroundColor:'#0093c1', justifyContent: 'center'}}>

        <Container>
          <Text style={{fontSize: 25, color: '#45484c'}}> Name </Text>
          <View style={styles.textInput}>
            <TextInput
              style={styles.textInputSize}
            />
            </View>
        </Container>

        <Container>
          <Text style={{fontSize: 25, color: '#45484c'}}> Age </Text>
          <View style={styles.textInput}>
            <TextInput
              style={styles.textInputSize}
               keyboardType = 'numeric'
            />
            </View>
        </Container>

        <Container>
          <Text style={{fontSize: 25, color: '#45484c'}}> Diagnosis/Stage </Text>
          <View style={styles.textInput}>
            <TextInput
              style={styles.textInputSize}
            />
            </View>
        </Container>

        <Container>
          <Text style={{fontSize: 25, color: '#45484c'}}> Gender </Text>
          <View style={styles.textInput}>
            <TextInput
              style={styles.textInputSize}
            />
            </View>
        </Container>

        <TouchableHighlight
            label = "Next (Family Info)"
            style = {styles.nextButton}

            onPress={ () => this.changeToFamilyInfo()} >
            <Text style={styles.nextText}>
            Next (Family Info)
            </Text>

        </TouchableHighlight>

      </View>
    )
  }
}

class FamilyInfoView extends Component{
  render(){
    return (
      <View style={{flex:1, paddingTop:20, backgroundColor:'#0093c1',}}>
      <View style = {{flex:1, height: 80, width: 352, padding:15, borderWidth:1, borderColor: '#008ae0', borderRadius: 10}}>

      <Container>
        <Label text="Family Member 1" />
      </Container>

      <Container>
        <Text style={{fontSize: 25, color: '#45484c'}}> Name </Text>
        <View style={styles.textInputFamily}>
          <TextInput
            style={styles.textInputSizeFamily}
          />
          </View>
      </Container>

      <Container>
        <Text style={{fontSize: 25, color: '#45484c'}}> Email </Text>
        <View style={styles.textInputFamily}>
          <TextInput
            style={styles.textInputSizeFamily}
          />
          </View>
      </Container>

      <Container>
        <Text style={{fontSize: 25, color: '#45484c'}}> Phone </Text>
        <View style={styles.textInputFamily}>
          <TextInput
            style={styles.textInputSizeFamily}
              keyboardType = 'numeric'
          />
          </View>
      </Container>
      </View>

      <View style = {{flex:1, height: 80, width: 352, marginTop:13, marginBottom: 50, padding:15, borderWidth:1, borderColor: '#008ae0', borderRadius: 10}}>
      <Container>
        <Label text="Family Member 2" />
      </Container>

      <Container>
        <Text style={{fontSize: 25, color: '#45484c'}}> Name </Text>
        <View style={styles.textInputFamily}>
          <TextInput
            style={styles.textInputSizeFamily}
          />
          </View>
      </Container>

      <Container>
        <Text style={{fontSize: 25, color: '#45484c'}}> Email </Text>
        <View style={styles.textInputFamily}>
          <TextInput
            style={styles.textInputSizeFamily}
          />
          </View>
      </Container>

      <Container>
        <Text style={{fontSize: 25, color: '#45484c'}}> Phone </Text>
        <View style={styles.textInputFamily}>
          <TextInput
            style={styles.textInputSizeFamily}
              keyboardType = 'numeric'
          />
          </View>
      </Container>
      </View>

      <View style={styles.finishButtonView}>
        <TouchableHighlight style={{flexDirection:'row'}}>
          <Text style={{fontSize: 24, color: '#fff'}}>
           Finish
          </Text>
        </TouchableHighlight>
      </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#0093c1',
     padding: 30,
     flexDirection: 'column',
    // justifyContent: 'center', //moves stuff hight wise
    // alignItems: 'center',
  },
  logincontainer: {
    flex:1,
    backgroundColor: '#0093c1',
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
    height: 50,
    width: 210,

    backgroundColor: '#0093c1',
    borderBottomWidth: 1,
    borderBottomColor: '#070c28'
},

  textInputFamily: {
    height: 14,
    width: 210,
    paddingTop:5 ,
    backgroundColor: '#0093c1',
    borderBottomWidth: 1,
    borderBottomColor: '#070c28'
},
  textInputSize: {
    height: 50,
    width: 210,
    fontSize : 30
  },

  textInputSizeFamily: {
    height: 20,
    width: 210,
    paddingTop: 5,
    fontSize : 14
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
  paddingLeft:10,
  paddingRight:10,
  backgroundColor:'#092663',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#092663',
  shadowColor: '#3e4247',
  shadowOffset: {width: 2, height: 2},
  shadowOpacity: 2,
  shadowRadius: 5
},
submitText: {
  color:'#fff',
     textAlign:'center',
     fontSize: 30
},

nextText: {
  color:'#fff',
     textAlign:'center',
     fontSize: 20
},

RegisterButton : {
  marginRight:30,
  marginLeft:30,
  marginTop:10,
  paddingTop:10,
  paddingBottom:10,
  paddingLeft:10,
  paddingRight:10,
  backgroundColor:'#006caf',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#006caf',
  shadowColor: '#3e4247',
  shadowOffset: {width: 2, height: 2},
  shadowOpacity: 2,
  shadowRadius: 5
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
  borderColor: '#42d4f4',

  shadowColor: '#3e4247',
  shadowOffset: {width: 2, height: 2},
  shadowOpacity: 2,
  shadowRadius: 5,
  borderRadius: 10
},

cancelButton: {

  backgroundColor: '#c2cad3',
  shadowColor: '#3e4247',
  shadowOffset: {width: 2, height: 2},
  shadowOpacity: 2,
  shadowRadius: 5,
  borderRadius: 10
},

nextButton: {

  marginRight:30,
  marginLeft:30,
  marginTop:80,
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:'#42d4f4',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#42d4f4',

  shadowColor: '#3e4247',
  shadowOffset: {width: 2, height: 2},
  shadowOpacity: 2,
  shadowRadius: 5,
  borderRadius: 10
},

finishButton: {

  marginRight:30,
  marginLeft:30,
  //  marginTop:80,
  paddingTop:10,
  paddingBottom:10,
  backgroundColor:'#42d4f4',
  borderRadius:10,
  borderWidth: 1,
  borderColor: '#42d4f4',
},
finishButtonView: {
  marginLeft:270,
  marginBottom: 15,
  marginRight: 5,
  padding:5,
  backgroundColor: '#42d4f4',
  borderRadius: 10,
  shadowColor: '#3e4247',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 2,
  shadowRadius: 3,
  borderRadius: 10
},

primaryButton: {
    backgroundColor: '#34A853',
    shadowColor: '#3e4247',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 2,
    shadowRadius: 5,
    borderRadius: 10
},
footer: {
   marginTop: 100
}
});

AppRegistry.registerComponent('app', () => app);
