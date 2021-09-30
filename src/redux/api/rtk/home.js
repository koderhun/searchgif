import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const defaultData = {
  limit: 25,
  offset: 0,
  rating: "g",
  lang: "en",
  key: "UFsb5tfUUEt9dcAmEQ1xYQbkL2SkQR9g"
}

export const giphyApi = createApi({
  reducerPath: "giphy",
  tagTypes: ["Gifs"],
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.giphy.com/v1/gifs` }),
  endpoints: (build) => ({
    search: build.query({
      query: (q = "") => {
        console.log()
        return `search?api_key=${defaultData.key}&q=${q}&limit=${defaultData.limit}&offset=${defaultData.offset}&rating=${defaultData.rating}&lang=${defaultData.lang}`
      }
    })
  })
})

export const translateApi = createApi({
  reducerPath: "translate",
  tagTypes: ["Translate"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://translate.astian.org/translate"
  }),
  endpoints: (build) => ({
    ru2en: build.mutation({
      query: (text) => ({
        method: "POST",
        body: {
          q: text,
          source: "ru",
          target: "en",
          headers: { "Content-Type": "application/json" }
        }
      })
    })
  })
})
