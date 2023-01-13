import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Player } from '../../types/Player';
import { PlayersSliceState } from './players.types';

const initialState: PlayersSliceState = {
    data: [],
    loading: false,
    error: null
};

// Compromize => no unit test player actions

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        setPlayers: (state, action: PayloadAction<Player[]>) => {
            state.data = action.payload;
        }
    }
});
