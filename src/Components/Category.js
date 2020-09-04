import React from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'

const Category=(props)=>{
    return(
        <View style={styles.container}>
         
             <View style={{flex:2}}>
                        <Image
                            style={styles.tinyLogo}
                            source={props.img}
                        />
                       
                        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20
    },
    tinyLogo:{
        width:80,
        height:80
    }
  });

export default Category;