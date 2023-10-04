import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/reducers/cartReducer';
import { Link } from 'react-router-dom';
// import { removeFromCart } from '../redux/actions/cartActions';

const CartPage = () => {

  // 🍉redux
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const decreaseDispatch=(item)=>{
    dispatch(decreaseQuantity(item))
  }
  const increaseDispatch=(item)=>{
    dispatch(increaseQuantity(item))
  }
  const removeDispatch=(item)=>{
    dispatch(removeFromCart(item))
  }
  // ----

  
  //🍀 Calculate total price, tax, and subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Assume a 10% tax rate, you can adjust this as needed
  const taxRate = 0.10;
  const tax = subtotal * taxRate;

  const total = subtotal + tax;

  // Remove all items from the Redux store
  const handleResetCart = () => {    
    cartItems.forEach((item) => dispatch(removeFromCart(item)));

    // Clear localStorage
    localStorage.clear();
  };

  

  return (
    <div id='CartPage'>
      <main className='left'>
        <h1>Cart</h1>
        <ul className="items-wrap">      

          {cartItems.map((item) => (
              <li key={item.id} className='items-container'>
              <Link className='link thumbnail-container' to={`/product/${item.id}`} key={item.id}>
                <div className="thumbnail-container">                
                  <img src={item.images[0]} alt={item.title} />
                </div>
              </Link>
                <section className="details">
                  <div>
                    {item.title && <h1>{item.title}</h1>}                  
                    {item.price && <div className="price">${item.price}</div>}
                  </div>
                  <div className='price-container'>
                    {/* <h4>Price  : ${item.price.toFixed(2)}</h4> */}
                    <h4>Price  : ${item.price.toFixed(2)}</h4>
                    <h4>QTY : {item.quantity}</h4>
                    <h4>Subtotal : ${item.price * item.quantity}</h4>              
                  </div>
                  <div className='btn-container'>
                    <button className="myButton cartBtn" onClick={() => decreaseDispatch(item)}>-</button>
                    <button className="myButton cartBtn" onClick={() => increaseDispatch(item)}>+</button>
                    <button className="myButton cartBtn" onClick={() => removeDispatch(item)}> <DeleteForeverIcon className='mui-icon'/></button>
                  </div>    
                </section>
              </li>
            ))}   
        </ul>
      </main>
      <main className='right'>
        <section className='totalPrice'>
          <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
          <h2>Tax (10%): ${tax.toFixed(2)}</h2>
          <h2>Total: ${total.toFixed(2)}</h2>
          <div className="btn-container">
            <button className="myButton" onClick={handleResetCart}>Reset Cart</button>
            <button className="myButton" >Order</button>
          </div>
        </section>
        </main>
    </div>
  );
};

export default CartPage;
