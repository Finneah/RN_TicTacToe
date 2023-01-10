import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root/root.reducer';

export const store = configureStore({
    reducer: rootReducer
    //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
