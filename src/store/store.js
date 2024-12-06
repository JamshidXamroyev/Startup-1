import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/auth'


export const store = configureStore({
  reducer: {
    auth: counterReducer,
  },
  devTools: process.env.NODE_ENV !== "production"
})