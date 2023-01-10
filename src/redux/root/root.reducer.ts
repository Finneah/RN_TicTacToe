import { combineReducers } from '@reduxjs/toolkit';

import { gameSlice } from '../game/game.slice';
import { playersSlice } from '../players/players.slice';

/* ------------- Assemble The Reducers ------------- */
export const rootReducer = combineReducers({
    players: playersSlice.reducer,
    game: gameSlice.reducer
});
