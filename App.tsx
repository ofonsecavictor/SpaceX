import React from 'react';
import { StatusBar, View } from 'react-native';
import { Routes } from './src/Routes/routes';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Routes />
        </View>
    );
}
