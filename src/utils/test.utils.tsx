import {NativeBaseProvider} from 'native-base';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

const inset = {
    frame: {x: 0, y: 0, width: 0, height: 0},
    insets: {top: 0, left: 0, right: 0, bottom: 0}
};

const customRender = (
    ui: any,
    {initialState = null, ...renderOptions} = {}
) => {
    const allProvidersWrapper = ({children}: any) => {
        return (
            <NativeBaseProvider initialWindowMetrics={inset}>
                <NavigationContainer>{children}</NavigationContainer>
            </NativeBaseProvider>
        );
    };

    return render(ui, {wrapper: allProvidersWrapper, ...renderOptions});
};

export * from '@testing-library/react-native';

export {customRender as render};
