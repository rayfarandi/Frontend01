import { configureStore } from '@reduxjs/toolkit'
import orderReducer from '../src/features/OrderSlice'

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
})
