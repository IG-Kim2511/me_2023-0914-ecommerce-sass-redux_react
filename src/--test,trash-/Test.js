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
      const { id, quantity } = action.payload; // Extract id and quantity from payload
      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity; // Increase the quantity by the dispatched quantity
      } else {
        state.cartItems.push({ ...action.payload });
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const { id, quantity } = action.payload; // Extract id and quantity from payload
      const itemToRemove = state.cartItems.find(item => item.id === id);

      if (itemToRemove) {
        if (itemToRemove.quantity > quantity) {
          itemToRemove.quantity -= quantity; // Decrease the quantity by the dispatched quantity
        } else {
          state.cartItems = state.cartItems.filter(item => item.id !== id);
        }
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    increaseQuantity: (state, action) => {
      const { id } = action.payload; // Extract id from payload
      const itemToIncrease = state.cartItems.find(item => item.id === id);
      if (itemToIncrease) {
        itemToIncrease.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const { id } = action.payload; // Extract id from payload
      const itemToDecrease = state.cartItems.find(item => item.id === id);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;


// removeFromCart: (state, action) => {
//   state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
  
//   localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
// },