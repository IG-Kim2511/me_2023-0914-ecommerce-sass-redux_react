// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import counterReducer from './reducers/counterReducer'; // Corrected the import path

const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer,
  },
});

export default store;
