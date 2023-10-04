// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import filterReducer from './reducers/filterReducer';

// 🦄new : configureStore (createStore 새로운 버전)
const store = configureStore({
  reducer: {
    cart: cartReducer, // Add more reducers if needed
    filter: filterReducer,
  },
});

export default store;
