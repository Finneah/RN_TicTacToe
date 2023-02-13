import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {GameScreen} from '../screens/GameScreen/GameScreen';
import {GameSettingsScreen} from '../screens/GameSettingsScreen/GameSettingsScreen';

export type MainStackParamList = {
    GameSettings: undefined;
    Game: undefined;
};
const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="GameSettings"
                options={{title: 'TicTacToe'}}
                component={GameSettingsScreen}
            />

            <Stack.Screen
                name="Game"
                options={{title: 'TicTacToe'}}
                component={GameScreen}
            />
        </Stack.Navigator>
    );
};

export default MainStack;
