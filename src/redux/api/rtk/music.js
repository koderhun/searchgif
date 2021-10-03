import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { parseFolders, setError } from "../../utils"
import { MUSIC_ROOT_URL } from "../../../consts"

export const fetchMusics = createAsyncThunk(
  "musics/fetchMusics",
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

const musicsSlice = createSlice({
  name: "musics",
  initialState: {
    musics: [],
    status: null,
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchMusics.pending]: (state) => {
      state.status = "loading"
      state.error = null
    },
    [fetchMusics.fulfilled]: (state, action) => {
      state.status = "fulfilled"
      state.musics = action.payload
    },
    [fetchMusics.rejected]: setError
  }
})

export const musicsReducer = musicsSlice.reducer
