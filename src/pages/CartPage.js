import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/reducers/cartReducer';
// import { removeFromCart } from '../redux/actions/cartActions';

const CartPage = () => {

  // 🍉redux
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (productId) => {
    // dispatch(removeFromCart(productId));   
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };
  const decreaseDispatch=(item)=>{ 
    dispatch(decreaseQuantity(item))
  }
  const increaseDispatch=(item)=>{
    dispatch(increaseQuantity(item))
  }
  const removeDispatch=(item)=>{
    dispatch(removeFromCart(item))
  }


  
  return (
    <div id='CartPage'>
      <h1>Cart</h1>
      <ul className="items">      

        {cartItems.map((item) => (
            <li key={item.id}>
              {item.thumbnail && <img src={item.thumbnail} alt={item.title} />}
              <section className="details">
                <div>
                  {item.title && <h1>{item.title}</h1>}
                  {item.description && <p>{item.description}</p>}
                  {item.price && <div className="price">${item.price}</div>}
                </div>
                <div className='price-container'>
                  {/* <h4>Price  : ${item.price.toFixed(2)}</h4> */}
                  <h4>Price  : ${item.price.toFixed(2)}</h4>
                  <h4>QTY : {item.quantity}</h4>
                </div>

                <div>
                  <button className="myButton" onClick={() => decreaseDispatch(item)}>-</button>
                  <button className="myButton" onClick={() => increaseDispatch(item)}>+</button>
                  <button className="myButton" onClick={() => removeDispatch(item)}> <DeleteForeverIcon />Remove</button>
                </div>    
              </section>
              <section className="total">
                <span>Subtotal</span>
                {item.price && <span>${item.price * item.quantity}</span>}
              </section>
            </li>
          ))}
          

      </ul>
    </div>
  );
};

export default CartPage;
