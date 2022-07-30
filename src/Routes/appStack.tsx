import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../Screens/HomeScreen';
import { LoginScreen } from '../Screens/LoginScreen';

export type NavigationProps = {
    LoginScreen: undefined;
    HomeScreen: undefined;
};

export function AppStack() {
    const Stack = createNativeStackNavigator<NavigationProps>();
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="LoginScreen">
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
}
