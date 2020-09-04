import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Slideshow from 'react-native-slideshow'

const Slider = () => {
    const [position, setPosition] = React.useState(1)
    const [interval, setTimer] = React.useState(null)
    const [dataSource, setData] = useState([
        {
            title: 'Title 1',
            caption: 'Caption 1',
            url: 'http://placeimg.com/640/480/any',
        }, {
            title: 'Title 2',
            caption: 'Caption 2',
            url: 'http://placeimg.com/640/480/any',
        }, {
            title: 'Title 3',
            caption: 'Caption 3',
            url: 'http://placeimg.com/640/480/any',
        },
    ])

    useEffect(() => {
        setTimer(setInterval(() => {

            setPosition(position === dataSource.length ? 0 : position + 1)
           
        }, 2000))

        // returned function will be called on component unmount 
        return () => {
            clearInterval(interval);
        }
    }, [])


    return (
        <View style={styles.container}>
            <Slideshow
                dataSource={dataSource}
                position={position}
            onPositionChanged={position => setPosition(position)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Slider;