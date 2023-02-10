import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice'
import registerSlice from './redux/registerSlice'
import activeSlice from './redux/activeSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    register: registerSlice,
    active: activeSlice,
  },
})