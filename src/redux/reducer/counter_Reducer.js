import { createSlice } from '@reduxjs/toolkit'

export const counter_Reducer = createSlice({
  name: 'counter',

  // 🍀initialState
  initialState: {
    value: 0,
  },

  // 🍀reducers
  reducers: {
    increment: (state) => {      
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counter_Reducer.actions

export default counter_Reducer.reducer