// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2/",
    method: "GET",
    prepareHeaders: (headers) => {
      headers.set("Authorization", import.meta.env.VITE_NEWS_API_KEY)
      return headers;
    },
    

  }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: (name) => `top-headlines?country=in&category=${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoryQuery } = apiSlice;
