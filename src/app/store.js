import { configureStore } from '@reduxjs/toolkit'
import  currUserSlice  from '../features/currUserSlice'


export default configureStore({
  reducer: {
    currUser:currUserSlice,
  },
})