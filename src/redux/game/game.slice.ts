import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Game } from '../../types/Game';
import { Player, PlayerEnum } from '../../types/Player';
import { baseSliceErrorReducer, baseSliceFulfilledSplice, baseSliceLoadingReducer } from '../base.reducers';
import { GameSliceState } from './game.types';

const initialState: GameSliceState = {
    data: {
        turn: 1,
        playersturn: PlayerEnum.PLAYER_ONE,
        board: {},
        finished: false
    },
    loading: false,
    error: null
};

const winConditions = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22'],
    ['00', '10', '20'],
    ['01', '11', '21'],
    ['02', '12', '22'],
    ['00', '11', '22'],
    ['02', '11', '20']
];

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // if user clicks on board
        play: (state, action: PayloadAction<Game>) => {
            if (!action.payload.board) {
                state = {...state, error: 'missing Board'};
            }

            state.data.board = action.payload.board;
            winConditions.forEach((winCondition) => {
                const p1HasWon =
                    state.data.board[winCondition[0]] === 1 &&
                    state.data.board[winCondition[1]] === 1 &&
                    state.data.board[winCondition[2]] === 1;
                const p2HasWon =
                    state.data.board[winCondition[0]] === 2 &&
                    state.data.board[winCondition[1]] === 2 &&
                    state.data.board[winCondition[2]] === 2;
                if (p1HasWon || p2HasWon) {
                    state.data.finished = true;
                }
            });
            if (!state.data.finished) {
                state.data.playersturn =
                    state.data.playersturn === PlayerEnum.PLAYER_ONE
                        ? PlayerEnum.PLAYER_TWO
                        : PlayerEnum.PLAYER_ONE;
            }

            // TODO check win situation
        },
        restart: (state) => {
            state.data.board = {};
            state.data.finished = false;
            state.data.turn = state.data.turn + 1;
        }
    }
});
