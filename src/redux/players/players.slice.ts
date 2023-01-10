import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Player } from '../../types/Player';
import { baseSliceErrorReducer, baseSliceFulfilledSplice, baseSliceLoadingReducer } from '../base.reducers';
import { PlayersSliceState } from './players.types';

const initialState: PlayersSliceState = {
    data: [],
    loading: false,
    error: null
};

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        setPlayers: (state, action: PayloadAction<Player[]>) => {
            // TODO not more then two players
            state.data = action.payload;
        }
    }
});
