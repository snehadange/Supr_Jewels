import React from 'react'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'

const HEIGHT = Dimensions.get('window').height
const NAVBAR = HEIGHT * 0.18
const BODY = HEIGHT * 0.6
const FOOTER = HEIGHT * 0.1

import * as Icon from 'react-native-vector-icons';
import Slider from '../Components/Slider'
import Favourite from '../Components/Favourite'


const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homecontainer}>
        <View style={{ height: NAVBAR, backgroundColor: '#29a329' }}>
          <View style={{ left: 10, marginTop: 70, flexDirection: 'row' }}>
            <View style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
              {/*<Image source={{ uri: image }} style={{ width: 120, height: 120, borderRadius: 100 }} />*/}
              <Icon.FontAwesome5 name="user" size={30} color='#0991A8' />
            </View>
            <View>
              <Text style={styles.headerText}>Hi User</Text>
              <Text style={styles.headerText}>Welcome,</Text>
            </View>
            <View style={{ marginLeft: 200 }}>
              <TouchableOpacity>
                <Icon.MaterialCommunityIcons name="dots-horizontal" size={30} color='white' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ height: BODY / 2, backgroundColor: 'red' }}>
          <Slider />
        </View>
        <View style={{paddingTop:20}}>
          <Text style={{fontSize:22,fontFamily:'sanssemiBold'}}>Favourite</Text>
        </View>
        <View style={{ height: BODY / 2, backgroundColor: 'red' }}>
          <Favourite/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 14,
    left: 10,
    color: 'white',
    fontFamily: 'sansbold'
  }
});
export default Home