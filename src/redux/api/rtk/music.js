import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const musicApi = createApi({
  reducerPath: "music",
  tagTypes: ["Music"],
  baseQuery: fetchBaseQuery({ baseUrl: `http://music.p1ratrulezzz.com/FLAC/` }),
  endpoints: (build) => ({
    getMusic: build.query({
      query: (q = "") => {
        return ""
      }
    })
  })
})
