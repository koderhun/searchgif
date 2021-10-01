import { configureStore } from "@reduxjs/toolkit"
import { giphyApi, translateApi, musicApi } from "../api"

export const store = configureStore({
  reducer: {
    [giphyApi.reducerPath]: giphyApi.reducer,
    [translateApi.reducerPath]: translateApi.reducer,
    [musicApi.reducerPath]: musicApi.reducer
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(
      giphyApi.middleware,
      translateApi.middleware,
      musicApi.middleware
    )
})
