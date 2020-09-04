import React from 'react';
import { AppLoading } from 'expo'
import { Ionicons } from 'react-native-vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font'

import Login from './src/Screens/AuthScreen/Login';
import Register from './src/Screens/AuthScreen/Register';

import Home from './src/Screens/Home';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />

            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}


export default function App() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);


    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {

            await Font.loadAsync({
                ...Ionicons.font,
                'sansblack': require('./assets/fonts/SourceSansPro-Black.ttf'),
                'sansbold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
                'sansextraLight': require('./assets/fonts/SourceSansPro-ExtraLight.ttf'),
                'sanslight': require('./assets/fonts/SourceSansPro-Light.ttf'),
                'sansregular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
                'sanssemiBold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
                'sansitalic': require('./assets/fonts/SourceSansPro-LightItalic.ttf'),
                'spaceMonoregular': require('./assets/fonts/SpaceMono-Regular.ttf'),
                'spacemono': require('./assets/fonts/SpaceMono-Regular.ttf'),

            });



            setLoadingComplete(true)

        }

        loadResourcesAndDataAsync();
    }, [])
    if (!isLoadingComplete) {
        return null
    }


    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );

}