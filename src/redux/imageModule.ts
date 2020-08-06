import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PexelsImage, PexelsResponse } from '../interfaces'

export interface ImageState {
  per_page: number
  photos: PexelsImage[]
  next_page: string | null
  query: string
  isLoading: boolean
}

const initialState: ImageState = {
  per_page: 10,
  photos: [],
  next_page: null,
  query: 'spain',
  isLoading: false,
}

const image = createSlice({
  name: 'image',
  initialState,
  reducers: {
    updateQuery(state, { payload }: PayloadAction<string>) {
      state.query = payload
      state.photos = []
      state.next_page = null
      state.isLoading = false
    },

    loadMore(state, { payload }: PayloadAction<PexelsResponse>) {
      state.photos = [...state.photos, ...payload.photos]
      state.next_page = payload.next_page
      state.isLoading = false
    },

    getInitialImages(state, { payload }: PayloadAction<PexelsResponse>) {
      state.photos = payload.photos
      state.next_page = payload.next_page
      state.isLoading = false
    },

    setLoading(state) {
      state.isLoading = true
    },

    setError(state) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = initialState
    },
  },
})

export const {
  updateQuery,
  loadMore,
  getInitialImages,
  setLoading,
  setError,
} = image.actions

export default image.reducer
