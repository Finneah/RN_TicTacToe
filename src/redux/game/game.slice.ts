import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Game } from '../../types/Game';
import { Player, PlayerEnum } from '../../types/Player';
import { GameSliceState } from './game.types';
import { checkDraw, checkWin } from './game.utils';

const initialState: GameSliceState = {
    data: {
        turn: 1,
        playersturn: PlayerEnum.PLAYER_ONE,
        board: {},
        finished: false,
        winCondition: null
    },
    loading: false,
    error: null
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // if user clicks on board
        play: (state, action: PayloadAction<Game>) => {
            state.data.board = action.payload.board;
            const winCondition = checkWin(state.data.board);
            if (checkWin(state.data.board)) {
                state.data.finished = true;
                state.data.winCondition = winCondition;
            }
            if (!state.data.finished) {
                if (checkDraw(state.data.board)) {
                    state.data.draw = true;
                    state.data.finished = true;
                }
            }

            if (!state.data.finished) {
                state.data.playersturn =
                    state.data.playersturn === PlayerEnum.PLAYER_ONE
                        ? PlayerEnum.PLAYER_TWO
                        : PlayerEnum.PLAYER_ONE;
            }
        },
        restart: (state) => {
            state.data.board = {};
            state.data.finished = false;
            state.data.draw = false;
            state.data.turn = state.data.turn + 1;
            state.data.winCondition = null;
            state.data.playersturn =
                state.data.playersturn === PlayerEnum.PLAYER_ONE
                    ? PlayerEnum.PLAYER_TWO
                    : PlayerEnum.PLAYER_ONE;
        }
    }
});
