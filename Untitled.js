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
