import React from 'react';
import { StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { Routes } from './src/Routes/routes';
import store from './src/Store/store';
Icon.loadFont();

const queryClient = new QueryClient();

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <Routes />
                </Provider>
            </QueryClientProvider>
        </View>
    );
}
