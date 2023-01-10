import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../root/root.types';

export const playersSelectors = createSelector(
    (state: RootState) => state.players,
    (playersState) => playersState
);
