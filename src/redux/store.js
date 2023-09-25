import { configureStore } from '@reduxjs/toolkit'
import counter_Reducer from './reducer/counter_Reducer'


export default configureStore({
  reducer: {
    counter: counter_Reducer
  }
})