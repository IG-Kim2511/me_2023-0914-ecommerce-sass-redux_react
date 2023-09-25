import React from 'react'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';


const CartPage = () => {

    const cartItems = useSelector((state)=> state.cart.cartItems);
    
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
      };

  return (
    <div id='CartPage'>
        <h1>Cart</h1>    
        <ul className="items">
        {cartItems.map((item) => {
          
            return (
                <ul className="items">
                {cartItems.map((item)=>(
                    <li key={item.productId}>  
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <div className="price">${item.price}</div>
                        <button onClick={() => handleRemoveFromCart()}>
                            <DeleteForeverIcon />
                        </button>
                    </div>
                    <div className="total">
                        <span>Subtotal</span>
                        <span>${item.price * item.quantity}</span>
                    </div>
                </li>
                ))}
                
                </ul>
                
            );
        })}
    </ul>

        
    </div>
  )
}

export default CartPage





