import React, { useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/reducers/cartReducer';

const CartPage = () => {
  const dispatch = useDispatch();

  // Retrieve cartItems from localStorage on component load
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Dispatch an action to update the Redux store with the saved cartItems
    savedCartItems.forEach(item => dispatch(addToCart(item)));
  }, [dispatch]);

  // ... rest of your CartPage component code ...

  return (
    <div id='CartPage'>
      {/* ... rest of your component code ... */}
    </div>
  );
};

export default CartPage;
