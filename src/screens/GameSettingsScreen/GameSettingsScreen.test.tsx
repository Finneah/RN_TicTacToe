import * as React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { act, fireEvent, RenderAPI, waitFor } from '@testing-library/react-native';

import { render } from '../../../utils/test.utils';
import { GameSettingsScreen } from './GameSettingsScreen';

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
            key: 'GameSettingsScreen',
            name: 'GameSettings'
        })
    };
});

describe('GameSettingsScreen', () => {
    beforeEach(() => {
        screen = render(
            <GameSettingsScreen
                navigation={useNavigation()}
                route={useRoute()}
            />
        );
    });

    it('smoke test', () => {
        expect(screen.toJSON()).toBeTruthy();
    });
    it('change Player 1 Name successfully', async () => {
        const player1Input = screen.getByPlaceholderText('Player 1');
        expect(player1Input).toBeTruthy();
        act(() => {
            fireEvent(player1Input, 'changeText', 'TestName');
        });
        await waitFor(() => {
            expect(player1Input.props['value']).toBe('TestName');
        });
    });

    it('change Player 1 Name with error Too Short', async () => {
        const player1Input = screen.getByPlaceholderText('Player 1');

        expect(player1Input).toBeTruthy();

        act(() => {
            fireEvent(player1Input, 'changeText', 'Te');
        });
        await waitFor(() => {
            expect(player1Input.props['value']).toBe('Te');
            expect(screen.getByText('Name is too short')).toBeTruthy();
        });
    });
    it('change Player 1 Name with error Name required', async () => {
        const player1Input = screen.getByPlaceholderText('Player 1');

        expect(player1Input).toBeTruthy();
        act(() => {
            fireEvent(player1Input, 'changeText', '');
        });

        await waitFor(() => {
            expect(player1Input.props['value']).toBe('');
            expect(screen.getByText('Name is required')).toBeTruthy();
        });
    });

    it('submit Button', () => {
        const submitButton = screen.getByText('Start Game');
        expect(submitButton).toBeTruthy();
        act(() => {
            fireEvent(submitButton, 'press');
        });
        expect(mockNavigate).toHaveBeenCalled();
    });
});
