// src/actions/productActions.js
export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      product,
    };
  };