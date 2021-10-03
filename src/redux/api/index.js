import { giphyApi, translateApi } from "./rtk/home"
import { musicsReducer } from "./rtk/music"

export const { useSearchQuery } = giphyApi
export const { useRu2enMutation } = translateApi
export { giphyApi, translateApi }
export { musicsReducer }
