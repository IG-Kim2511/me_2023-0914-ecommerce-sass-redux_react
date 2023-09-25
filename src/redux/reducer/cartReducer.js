// src/reducers/cartReducer.js
const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(
        (item) => item.id === action.product.id
      );

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + action.product.quantity }
            : item
        );
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If it's a new item, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, action.product],
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.productId),
      };
    default:
      return state;
  }
};

export default cartReducer;
