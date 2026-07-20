import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const navigatorOptions = {
    headerShown: false,
    animation: 'none',
    presentation: 'transparentModal',
};

const AppNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={navigatorOptions}>

            <Stack.Screen
                name="Splash"
                getComponent={() =>
                    require('../screens/Splash/SplashScreen').default
                }
            />

            <Stack.Screen
                name="Login"
                getComponent={() =>
                    require('../screens/Login/LoginScreen').default
                }
            />

            <Stack.Screen
                name="Home"
                getComponent={() =>
                    require('../screens/Home/HomeScreen').default
                }
            />


        </Stack.Navigator>
    );
};

export default AppNavigator;