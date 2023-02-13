import * as React from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import {RenderAPI} from '@testing-library/react-native';

import {render} from '../../utils/test.utils';
import {GameScreen} from './GameScreen';

let screen: RenderAPI;

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
    return {
        ...(jest.requireActual('@react-navigation/native') as object),
        useNavigation: () => ({
            navigate: mockNavigate,
            addListener: jest.fn(),
            removeListener: jest.fn()
        }),
        useRoute: () => ({
            key: 'GameScreen',
            name: 'GameSettings'
        })
    };
});

describe('GameScreen', () => {
    beforeEach(() => {
        screen = render(
            <GameScreen navigation={useNavigation()} route={useRoute()} />
        );
    });

    it('smoke test', () => {
        expect(screen.toJSON()).toBeTruthy();
    });
});
