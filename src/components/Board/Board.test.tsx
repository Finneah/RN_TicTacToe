import * as React from 'react';

import { RenderAPI } from '@testing-library/react-native';

import { render } from '../../../utils/test.utils';
import { PlayerEnum } from '../../types/Player';
import { Board } from './Board';

let screen: RenderAPI;
const mockGame = {
    turn: 0,
    playersturn: PlayerEnum.PLAYER_ONE,
    board: {},
    finished: false,
    winCondition: null,
    draw: undefined
};

describe('Board', () => {
    beforeEach(() => {
        screen = render(<Board game={mockGame} />);
    });

    it('smoke test', () => {
        expect(screen.toJSON()).toBeTruthy();
    });
});
