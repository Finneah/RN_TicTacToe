import {StatusBar} from 'expo-status-bar';
import {Box, extendTheme, NativeBaseProvider, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import MainStack from './src/Navigation/MainStack';

const App = () => {
    return (
        <>
            <StatusBar style="auto" />

            <NativeBaseProvider>
                <NavigationContainer>
                    <MainStack />
                </NavigationContainer>
            </NativeBaseProvider>
        </>
    );
};

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
