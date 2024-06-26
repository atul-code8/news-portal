import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/newsSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import { newsSlice } from './features/wnewsSlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [newsSlice.reducerPath]: newsSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsSlice.middleware),
})

setupListeners(store.dispatch)
