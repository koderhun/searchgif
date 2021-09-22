import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducers';
import { giphyApi } from '../api'

export const store = configureStore({
    reducer: {
        [giphyApi.reducerPath]: giphyApi.reducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(giphyApi.middleware)
});
