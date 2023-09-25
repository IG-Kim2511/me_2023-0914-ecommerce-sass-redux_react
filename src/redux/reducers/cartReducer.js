// reducers/cartReducer.js
import { createSlice } from '@reduxjs/toolkit';

// localStorage
const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
  cartItems: savedCartItems,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    increaseQuantity: (state, action) => {
      const itemToIncrease = state.cartItems.find(item => item.id === action.payload.id);
      if (itemToIncrease) {
        itemToIncrease.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemToDecrease = state.cartItems.find(item => item.id === action.payload.id);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
