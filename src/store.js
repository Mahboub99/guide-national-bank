import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/counterSlice'
import registerSlice from './redux/registerSlice'
import activeSlice from './redux/activeSlice'
import currentIndexSlice from './redux/currentIndexSlice'
import englishLearnIndexSlice from './redux/EnglishLearnIndexSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    register: registerSlice,
    active: activeSlice,
    currentIndex: currentIndexSlice,
    englishLearnIndex: englishLearnIndexSlice,
  },
})