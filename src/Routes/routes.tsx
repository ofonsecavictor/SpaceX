import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './appStack';

export function Routes() {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    );
}
