// src/store/store.js
import { combineReducers } from 'redux';
import productReducer from './reducer/productReducer';
import cartReducer from './reducer/cartReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
