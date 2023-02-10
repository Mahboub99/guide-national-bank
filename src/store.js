import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice'
import registerSlice from './redux/registerSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    register: registerSlice,
  },
})