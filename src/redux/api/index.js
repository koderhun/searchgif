import { giphyApi, translateApi } from "./rtk/home"
import { musicApi } from "./rtk/music"

export const { useSearchQuery } = giphyApi
export const { useRu2enMutation } = translateApi
export { giphyApi, translateApi }

export const { useGetMusicQuery } = musicApi
export { musicApi }
