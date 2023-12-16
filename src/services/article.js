// Redux Toolkit (RTK) Query

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/*
const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: article.url,
    length: '3'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};
*/

export const articleApi = createApi({
  reducerPath: 'articleApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', import.meta.env.VITE_API_KEY);
      headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

      return headers;
    }
  }),

  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
    })
  })
});

// export const {useGetSummaryQuery} = articleApi //to query on mount
export const { useLazyGetSummaryQuery } = articleApi; //to query on demand