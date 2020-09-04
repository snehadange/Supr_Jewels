import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, Animated, TextInput, TouchableOpacity } from 'react-native'
import * as Icon from "react-native-vector-icons";

const HEIGHT = Dimensions.get('window').height
const NAVBAR = HEIGHT * 0.4
const BODY = HEIGHT * 0.6
const FOOTER = HEIGHT * 0.1

class Login extends React.Component {
  state = {
    username: '',
    userpassword: '',
    opacity: new Animated.Value(0)
  }



  //const opacity = React.useState(new Animated.Value(0))[0]



  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start()
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.authcontainer}>

          <Animated.View style={{ height: NAVBAR, width: '100%', justifyContent: 'center', alignItems: 'center', opacity: this.state.opacity, marginTop: 40 }}>
            <Text style={{ fontSize: 30, color: 'white', textTransform: 'capitalize', fontFamily: 'sansregular' }}>WelCome to <Text style={{ fontWeight: 'bold', color: 'white', fontFamily: 'sansextraLight', textTransform: 'capitalize' }}>Suprjewels</Text></Text>
          </Animated.View>

          <View style={{ height: BODY, width: '100%', paddingHorizontal: 30, alignItems: 'center', justifyContent: 'flex-start', top: -70 }}>


            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder='Your Name' placeholderTextColor='white'
                value={this.state.username}
                onChangeText={(username) => this.setState({ username: username })}
              />
              <View style={{ position: 'absolute', left: 20 }}>
                <Icon.FontAwesome5 name="user" size={20} color="white" />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder='Your Password'
                placeholderTextColor='white'
                value={this.state.userpassword}
                secureTextEntry
                onChangeText={(userpassword) => this.setState({ userpassword: userpassword })}
              />
              <View style={{ position: 'absolute', right: 25 }}>
                <Icon.Ionicons name="md-checkmark" size={25} color="white" />
              </View>
              <View style={{ position: 'absolute', left: 20 }}>
                <Icon.FontAwesome name="lock" size={20} color="white" />
              </View>

            </View>

            <TouchableOpacity style={styles.btnContainer} onPress={() =>this.props.navigation.navigate('Home')}>
              <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{top:50}} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{fontSize: 20, color: 'white', fontFamily: 'sansregular' }}>Don't have account? signup </Text>
            </TouchableOpacity>
            
            <Text style={{ top: 60, fontSize: 25, color: 'white', fontFamily: 'sansitalic' }}>OR</Text>
            <Text style={{ top: 70, fontSize: 25, color: 'white', fontFamily: 'sansregular' }}>Login With</Text>

          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.fblogo}>
              <Text style={styles.logotext}>f</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.twitterlogo}>
              <Text style={styles.logotext}>tw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googlelogo}>
              <Text style={styles.logotext}>g+</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29a329',

  },
  authcontainer: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  inputContainer:
  {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 100,
    flex: 0.2,
    marginTop: 20
  },

  inputText:
  {
    height: 55,
    fontFamily: 'sanssemiBold',
    borderWidth: 2,
    width: '100%',
    borderRadius: 30,
    paddingLeft: 60, paddingRight: 50,
    borderColor: '#e1e1e1', fontSize: 18, color: 'white'

  },
  btnContainer:
  {
    width: '100%', height: 60, borderRadius: 30, alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', top: 40
  },
  btnText: {
    fontSize: 20,
    color: '#29a329',
    fontFamily: 'sansbold',
    textTransform: 'uppercase'
  },
  fblogo:
  {
    width: 40, height: 40, borderRadius: 30, alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3b5998', top: -130, marginLeft: 10
  },
  twitterlogo:
  {
    width: 40, height: 40, borderRadius: 30, alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00acee', top: -130, marginLeft: 10
  },
  googlelogo: {
    width: 40, height: 40, borderRadius: 30, alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6347', top: -130, marginLeft: 10
  },
  logotext: {
    fontSize: 25,
    fontFamily: 'sansblack'
  }
});
export default Login;