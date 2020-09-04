import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Dimensions, Image, TextInput, TouchableOpacity, ScrollView, Animated } from 'react-native'
import * as Icon from "react-native-vector-icons";
import * as ImagePicker from 'expo-image-picker';


const HEIGHT = Dimensions.get('window').height
const NAVBAR = HEIGHT * 0.4
const BODY = HEIGHT * 0.6
const FOOTER = HEIGHT * 0.1

const Register = () => {
  const [image, setImage] = React.useState(null)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const opacity = React.useState(new Animated.Value(0))[0]


  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start()
  })

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };


    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.authcontainer}>
            <View style={{ height: NAVBAR, width: '100%', justifyContent: 'center', alignItems: 'center', }}>
              {image ?

                <View style={{ width: 120, height: 120, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={{ uri: image }} style={{ width: 120, height: 120, borderRadius: 100 }} />
                  <View style={{ position: 'absolute', bottom: -5, right: 0, width: 38, height: 38, borderRadius: 100, backgroundColor: '#0991A8', justifyContent: 'center', alignItems: 'center' }} >
                    <Icon.FontAwesome5 name="arrow-up" size={22} color='#fff' onPress={() => pickImage()} />
                  </View>
                </View>
                :
                <View style={{ width: 120, height: 120, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                  <Icon.FontAwesome5 name="user" size={30} color='#0991A8' />
                  <View style={{ position: 'absolute', bottom: -5, right: 0, width: 38, height: 38, borderRadius: 100, backgroundColor: '#0991A8', justifyContent: 'center', alignItems: 'center' }} >
                    <Icon.FontAwesome5 name="arrow-up" size={22} color='#fff' onPress={() => pickImage()} />
                  </View>
                </View>
              }
            </View>

            <Animated.View style={{ top: -30, opacity }}>
              <Text style={{ fontSize: 20, color: 'white', textTransform: 'uppercase', fontFamily: 'sansregular' }}>Create New <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white',fontFamily:'sansbold' }}>Account</Text></Text>
              <View
                style={{
                  top: 20,
                  borderBottomColor: 'white',
                  borderBottomWidth: 2,
                  left: 20,
                  marginRight: 60
                }}
              />
            </Animated.View>

            <View style={{ height: BODY, width: '100%', paddingHorizontal: 30, alignItems: 'center', justifyContent: 'flex-start' }}>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  placeholder='Your Name' placeholderTextColor='white'
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
                <View style={{ position: 'absolute', left: 20 }}>
                  <Icon.FontAwesome5 name="user" size={20} color="white" />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  placeholder='Your Email' placeholderTextColor='white'
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />

                <View style={{ position: 'absolute', left: 20 }}>
                  <Icon.MaterialCommunityIcons name="email" size={20} color="white" />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  placeholder='Your Password' placeholderTextColor='white'
                  value={password}
                  secureTextEntry
                  onChangeText={(text) => setPassword(text)}
                />
                <View style={{ position: 'absolute', right: 25 }}>
                  <Icon.Ionicons name="md-checkmark" size={25} color="white" />
                </View>

                <View style={{ position: 'absolute', left: 20 }}>
                  <Icon.FontAwesome name="lock" size={20} color="white" />
                </View>
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputText}
                  placeholder='Confirm Password' placeholderTextColor='white'
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                />
                <View style={{ position: 'absolute', right: 25 }}>
                  <Icon.Ionicons name="md-checkmark" size={25} color="white" />
                </View>
                <View style={{ position: 'absolute', left: 20 }}>
                  <Icon.FontAwesome name="lock" size={20} color="white" />
                </View>
              </View>


            </View>


            <TouchableOpacity style={styles.btnContainer} onPress={() => onSubmit()}>
              <Icon.Feather name="arrow-right" size={40} color="white" />
            </TouchableOpacity>



          </View>
        </ScrollView>
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#2eb82e',
    backgroundColor: '#29a329'
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
    flex: 0.2
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
    width: 60, height: 60, borderRadius: 30, alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500', top: -70
  },
});

export default Register