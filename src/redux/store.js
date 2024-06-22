import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/newsSlice';
import { setupListeners } from '@reduxjs/toolkit/query'
import wnewsReducer from './features/wnewsSlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer,
    articles: wnewsReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

setupListeners(store.dispatch)
