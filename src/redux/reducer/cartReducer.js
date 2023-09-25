// cart.js

// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Initial state
const initialState = {
  cart: [],
};

// Action creators
export const addToCart = (product, quantity = 1) => ({
  type: ADD_TO_CART,
  payload: { product, quantity },
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: { product },
});

// Reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { product, quantity } = action.payload;
      const itemInCart = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (itemInCart) {
        // If the product is already in the cart, update the quantity
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === product.id
              ? { product, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        // If it's a new product, add it to the cart
        return {
          ...state,
          cart: [...state.cart, { product, quantity }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.product.id !== action.payload.product.id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
