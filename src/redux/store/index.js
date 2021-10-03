import { configureStore } from "@reduxjs/toolkit"
import { giphyApi, translateApi, musicsReducer } from "../api"

export const store = configureStore({
  reducer: {
    [giphyApi.reducerPath]: giphyApi.reducer,
    [translateApi.reducerPath]: translateApi.reducer,
    musics: musicsReducer
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(giphyApi.middleware, translateApi.middleware)
})
