import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  status: 'uninitialized',
  articles: [],
  error: null,
}

export const fetchArticles = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await axios.get('https://api.worldnewsapi.com/search-news?source-countries=in&number=25', {
    headers: {
      "x-api-key": import.meta.env.VITE_WNEWS_API_KEY
    }
  })
  return res.data
})

export const wnewsSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    // any additional "normal" case reducers here.
    // these will generate new action creators
  },
  extraReducers: (builder) => {
    // Use `extraReducers` to handle actions that were generated
    // _outside_ of the slice, such as thunks or in other slices
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.status = 'loading'
      })
      // Pass the generated action creators to `.addCase()`
      .addCase(fetchArticles.fulfilled, (state, action) => {
        // Same "mutating" update syntax thanks to Immer
        state.status = 'succeeded'
        state.articles = action.payload
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed'
        state.articles = []
        state.error = action.error
      })
  },
})


export default wnewsSlice.reducer