
// reducers/filterReducer.js
import { createSlice } from '@reduxjs/toolkit';



// 👉local storage
const initialState = {
    filterItems: [],
};


const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    decreaseQuantity: (state, action) => {
      const itemToDecrease = state.cartItems.find(item => item.id === action.payload.id);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;

      }
    },
  },
});

export const { decreaseQuantity } = filterSlice.actions;
export default filterSlice.reducer;
