import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  articles: [],
  status: 'idel',
  error: null,
}
// const API_URL = "https://newsapi.org/v2/top-headlines?country=in&category=sports";

const API_URL = 'https://api.worldnewsapi.com/search-news?q=sports&source-countries=in';


export const fetchArticles = createAsyncThunk('news/fetchArticles', async () => {
  const response = await axios.get(API_URL, {
    headers: {
      "x-api-key": import.meta.env.VITE_WNEWS_API_KEY
    }
  })
  // const data = await response.json();
  return response.data; // Assuming 'articles' is the array of news articles
  
})

export const wnewsSlice = createSlice({
  name: 'news',
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