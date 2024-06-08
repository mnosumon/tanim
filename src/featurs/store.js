import { configureStore } from '@reduxjs/toolkit'
import authSlies from './users/authSlies'

export const store = configureStore({
  reducer: {
    registration: authSlies
  },
})