import { AnyAction, CaseReducer } from '@reduxjs/toolkit';

import { BaseSliceState } from './base.types';

export const baseSliceLoadingReducer: CaseReducer = <
    T extends BaseSliceState<T>
>(
    state: T
) => {
    state.loading = true;
    state.error = null;
};

export const baseSliceErrorReducer: CaseReducer = <
    T extends BaseSliceState<T>,
    A extends AnyAction
>(
    state: T,
    action: A
) => {
    if (action.error.code === '0') {
        console.log(action.error);
    } else {
        console.log(action.error);
        state.error = action.error;
    }

    state.loading = false;
};

export const baseSliceFulfilledSplice = (state: {
    loading: boolean;
    error: Error | null;
}) => {
    state.loading = false;
    state.error = null;
};
