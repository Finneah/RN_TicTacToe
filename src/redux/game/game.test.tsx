import { PayloadAction } from '@reduxjs/toolkit';

import { Game } from '../../types/Game';
import { PlayerEnum } from '../../types/Player';
import { gameSlice } from './game.slice';

const mockGame: Game = {
    turn: 1,
    playersturn: PlayerEnum.PLAYER_ONE,
    board: {},
    finished: false,
    winCondition: null
};

const initialState = {
    data: mockGame,
    loading: false,
    error: null
};

describe('redux game reducer', () => {
    // REDUCERS
    it('should return the initial state', () => {
        expect(gameSlice.reducer(undefined, {type: undefined})).toEqual(
            initialState
        );
    });

    it('should handle play', () => {
        const mockGame = {
            turn: 1,
            playersturn: PlayerEnum.PLAYER_ONE,
            board: {'00': PlayerEnum.PLAYER_ONE},
            finished: false,
            winCondition: null
        };
        expect(
            gameSlice.reducer(initialState, gameSlice.actions.play(mockGame))
                .data
        ).toEqual({...mockGame, playersturn: PlayerEnum.PLAYER_TWO});
    });

    it('should handle play win', () => {
        const mockGame = {
            turn: 1,
            playersturn: PlayerEnum.PLAYER_ONE,
            board: {
                '00': PlayerEnum.PLAYER_ONE,
                '01': PlayerEnum.PLAYER_ONE,
                '02': PlayerEnum.PLAYER_ONE
            },
            finished: false,
            winCondition: null
        };
        expect(
            gameSlice.reducer(initialState, gameSlice.actions.play(mockGame))
                .data
        ).toEqual({
            ...mockGame,
            finished: true,
            winCondition: ['00', '01', '02']
        });
    });

    it('should handle play draw', () => {
        const mockGame = {
            turn: 1,
            playersturn: PlayerEnum.PLAYER_ONE,
            board: {
                '00': PlayerEnum.PLAYER_ONE,
                '01': PlayerEnum.PLAYER_TWO,
                '02': PlayerEnum.PLAYER_ONE,
                '11': PlayerEnum.PLAYER_TWO,
                '12': PlayerEnum.PLAYER_ONE,
                '13': PlayerEnum.PLAYER_TWO,
                '14': PlayerEnum.PLAYER_ONE,
                '15': PlayerEnum.PLAYER_TWO,
                '16': PlayerEnum.PLAYER_ONE
            },
            finished: false,
            winCondition: null
        };
        expect(
            gameSlice.reducer(initialState, gameSlice.actions.play(mockGame))
                .data
        ).toEqual({
            ...mockGame,
            finished: true,
            draw: true
        });
    });

    it('should handle restart', () => {
        const mockGame = {
            turn: 1,
            playersturn: PlayerEnum.PLAYER_ONE,
            board: {
                '00': PlayerEnum.PLAYER_ONE,
                '01': PlayerEnum.PLAYER_TWO,
                '02': PlayerEnum.PLAYER_ONE,
                '10': PlayerEnum.PLAYER_TWO,
                '11': PlayerEnum.PLAYER_ONE,
                '12': PlayerEnum.PLAYER_TWO,
                '20': PlayerEnum.PLAYER_ONE,
                '21': PlayerEnum.PLAYER_TWO,
                '22': PlayerEnum.PLAYER_ONE
            },
            finished: false,
            winCondition: null
        };
        expect(
            gameSlice.reducer(initialState, gameSlice.actions.restart()).data
        ).toEqual({
            ...mockGame,
            playersturn: 2,
            draw: false,
            board: {},
            turn: 2
        });
    });
});
