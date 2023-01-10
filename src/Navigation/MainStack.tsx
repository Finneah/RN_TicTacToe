// In App.js in a new project

import { Button } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootState } from '../redux/root/root.types';
import { GameScreen } from '../screens/GameScreen/GameScreen';
import { GameSettingsScreen } from '../screens/GameSettingsScreen/GameSettingsScreen';
import { Player } from '../types/Player';

export type MainStackParamList = {
    GameSettings: undefined;
    Game: undefined;
};
const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
    const players: Player[] | null = useSelector(
        (state: RootState) => state.players.data
    );

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
