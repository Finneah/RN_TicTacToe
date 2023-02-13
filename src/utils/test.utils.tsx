import {NativeBaseProvider} from 'native-base';
import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

import {RootState, store} from '../redux/store';
import {PlayerEnum} from '../types/Player';

const inset = {
    frame: {x: 0, y: 0, width: 0, height: 0},
    insets: {top: 0, left: 0, right: 0, bottom: 0}
};

const defaultInitialState: RootState = {
    players: {data: [], loading: false, error: null},
    game: {
        data: {
            turn: 1,
            playersturn: PlayerEnum.PLAYER_ONE,
            board: {},
            finished: false,
            winCondition: null
        },
        loading: false,
        error: null
    }
};

const customRender = (
    ui: any,
    {initialState = defaultInitialState, ...renderOptions} = {}
) => {
    const allProvidersWrapper = ({children}: any) => {
        return (
            <Provider store={store}>
                <NativeBaseProvider initialWindowMetrics={inset}>
                    <NavigationContainer>{children}</NavigationContainer>
                </NativeBaseProvider>
            </Provider>
        );
    };

    return render(ui, {wrapper: allProvidersWrapper, ...renderOptions});
};

export * from '@testing-library/react-native';

export {customRender as render};
