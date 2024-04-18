// store.ts

import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './index'; // Импортируйте объединенный редуктор

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
