import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import Category from './Category'


const Favourite = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={{ height: 90, marginTop: 20, backgroundColor: 'red', flexDirection: 'row' }}>
                    <View style={{flexDirection:'row'}}>
                        <Category img={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }} />
                        <Category img={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }} />
                         <Category img={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }} />
                         <Category img={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }} />
                         <Category img={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }} />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        //justifyContent: 'center',
    },

});
export default Favourite;