import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import image from './imageModule'

const rootReducer = combineReducers({
  image,
})

const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch

export default store
