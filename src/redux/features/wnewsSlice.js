// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const newsSlice = createApi({
  reducerPath: "wnewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.worldnewsapi.com/",
    prepareHeaders: (headers) => {
      headers.set("x-api-key", import.meta.env.VITE_WNEWS_API_KEY);
    },
  }),
  endpoints: (builder) => ({
    getNewsByName: builder.query({
      query: (name) =>
        `search-news?text=${name}&language=en&earliest-publish-date=2024-06-01`,
    }),
    getTopNews: builder.query({
      query: (name) => `top-news?source-country=${name}&language=en`,
    }),
    getNewsById: builder.query({
      query: (id) => `retrieve-news?ids=${id}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useLazyGetNewsByNameQuery,
  useGetTopNewsQuery,
  useGetNewsByIdQuery,
} = newsSlice;
