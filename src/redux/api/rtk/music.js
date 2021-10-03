import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { parseFolders } from "../../utils"
import { MUSIC_ROOT_URL } from "../../../consts"

export const fetchMusicFolders = createAsyncThunk(
  "musics/fetchMusicFolders",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(MUSIC_ROOT_URL)

      if (!response.ok) {
        throw new Error("Server Error!")
      }

      const body = await response.text()

      return parseFolders(body)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchMusicLists = createAsyncThunk(
  "musics/fetchMusicLists",
  async function (folder, { rejectWithValue }) {
    try {
      const response = await fetch(MUSIC_ROOT_URL + folder + "/")

      if (!response.ok) {
        throw new Error("Server Error!")
      }

      const body = await response.text()

      return parseFolders(body)
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const musicsSlice = createSlice({
  name: "musics",
  initialState: {
    musicsFolder: {
      status: null,
      error: null,
      list: []
    },
    musicsList: {
      status: null,
      error: null,
      list: []
    }
  },
  reducers: {},
  extraReducers: {
    [fetchMusicFolders.pending]: (state) => {
      state.musicsFolder.status = "loading"
      state.musicsFolder.error = null
    },
    [fetchMusicFolders.fulfilled]: (state, action) => {
      state.musicsFolder.status = "fulfilled"
      state.musicsFolder.list = action.payload
    },
    [fetchMusicFolders.rejected]: (state, action) => {
      state.musicsFolder.status = "rejected"
      state.musicsFolder.error = action.payload
    },
    /// music lists
    [fetchMusicLists.pending]: (state) => {
      state.musicsList.status = "loading"
      state.musicsList.error = null
    },
    [fetchMusicLists.fulfilled]: (state, action) => {
      state.musicsList.status = "fulfilled"
      state.musicsList.list = action.payload
    },
    [fetchMusicLists.rejected]: (state, action) => {
      state.musicsList.status = "rejected"
      state.musicsList.error = action.payload
    }
  }
})

export const musicsReducer = musicsSlice.reducer
