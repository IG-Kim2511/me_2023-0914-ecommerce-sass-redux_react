// src/store/store.js
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import productReducer from './reducer/productReducer';
import cartReducer from './reducer/cartReducer';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
