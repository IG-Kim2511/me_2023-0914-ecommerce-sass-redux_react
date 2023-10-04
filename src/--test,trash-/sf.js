import { createSlice } from '@reduxjs/toolkit';

// Import functions for local storage
const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cartState', serializedState);
  } catch (err) {
    // Handle errors while saving to local storage (if necessary)
  }
};

const initialState = loadCartState() || {
  cartItems: [],
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
      // Save the updated state to local storage
      saveCartState(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      // Save the updated state to local storage
      saveCartState(state);
    },
    increaseQuantity: (state, action) => {
      const itemToIncrease = state.cartItems.find(item => item.id === action.payload.id);
      if (itemToIncrease) {
        itemToIncrease.quantity++;
        // Save the updated state to local storage
        saveCartState(state);
      }
    },
    decreaseQuantity: (state, action) => {
      const itemToDecrease = state.cartItems.find(item => item.id === action.payload.id);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity--;
        // Save the updated state to local storage
        saveCartState(state);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
