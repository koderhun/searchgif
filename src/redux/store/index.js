import { configureStore } from "@reduxjs/toolkit"
import { giphyApi, translateApi } from "../api"

export const store = configureStore({
  reducer: {
    [giphyApi.reducerPath]: giphyApi.reducer,
    [translateApi.reducerPath]: translateApi.reducer
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(giphyApi.middleware, translateApi.middleware)
})
