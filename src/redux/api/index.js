import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const query = 'fuck'
const key = 'UFsb5tfUUEt9dcAmEQ1xYQbkL2SkQR9g'

export const giphyApi = createApi({
    reducerPath: 'giphy',
    tagTypes: ['Gifs'],
    baseQuery: fetchBaseQuery({ baseUrl: `https://api.giphy.com/v1/gifs` }),
    endpoints: (build) => ({
        search: build.query({
            query: ({q ='fuck',  limit=25, offset=0, rating='g', lang='en'}) => {
                return `search?api_key=${key}&q=${q}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`
            }
        })
    })
})

export const {useSearchQuery} = giphyApi