import React, { useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/reducers/cartReducer';

const CartPage = () => {

    
  // 🍉redux
  const dispatch = useDispatch();

  // Retrieve cartItems from localStorage on component load
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // Dispatch an action to update the Redux store with the saved cartItems
    savedCartItems.forEach(item => dispatch(addToCart(item)));
  }, [dispatch]);

  // Use savedCartItems as the source of cart items
  const savedCartItems = useSelector((state) => state.cart.cartItems);

  const decreaseDispatch = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const increaseDispatch = (item) => {
    dispatch(increaseQuantity(item));
  };

  const removeDispatch = (item) => {
    dispatch(removeFromCart(item));
  };

  // Calculate total price, tax, and subtotal
  const subtotal = savedCartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Assume a 10% tax rate, you can adjust this as needed
  const taxRate = 0.10;
  const tax = subtotal * taxRate;

  const total = subtotal + tax;

  // Function to clear the entire localStorage and Redux store
  const handleResetCart = () => {
    // Remove all items from the Redux store
    savedCartItems.forEach((item) => dispatch(removeFromCart(item)));

    // Clear localStorage
    localStorage.removeItem('cartItems');
  };

  return (
    <div id='CartPage'>
      <h1>Cart</h1>
      <ul className="items-wrap">
        {savedCartItems.map((item) => (
          <li key={item.id} className='items-container'>
            <div className="thumbnail-container">
              {item.thumbnail && <img src={item.thumbnail} alt={item.title} />}
            </div>
            <section className="details">
              <div>
                {item.title && <h1>{item.title}</h1>}
                {item.price && <div className="price">${item.price}</div>}
              </div>
              <div className='price-container'>
                <h4>Price  : ${item.price.toFixed(2)}</h4>
                <h4>QTY : {item.quantity}</h4>
              </div>
              <div className='btn-container'>
                <button className="myButton cartBtn" onClick={() => decreaseDispatch(item)}>-</button>
                <button className="myButton cartBtn" onClick={() => increaseDispatch(item)}>+</button>
                <button className="myButton cartBtn" onClick={() => removeDispatch(item)}> <DeleteForeverIcon /></button>
              </div>
            </section>
            <section className="itemPrice">
              <span>Subtotal</span>
              {item.price && <span>${item.price * item.quantity}</span>}
            </section>
          </li>
        ))}
      </ul>
      <section className='totalPrice'>
        <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
        <h4>Tax (10%): ${tax.toFixed(2)}</h4>
        <h4>Total: ${total.toFixed(2)}</h4>
        <div className="btn-container">
          <button className="myButton" onClick={handleResetCart}>Reset Cart</button>
          <button className="myButton">Order</button>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
