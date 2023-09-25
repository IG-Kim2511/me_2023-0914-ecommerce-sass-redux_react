import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
// import { removeFromCart } from '../redux/actions/cartActions';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    // dispatch(removeFromCart(productId));   
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  return (
    <div id='CartPage'>
      <h1>Cart</h1>
      <ul className="items">      

        {cartItems.map((item) => (
            <li key={item.productId}>
              {item.thumbnail && <img src={item.thumbnail} alt={item.title} />}
              <div className="details">
                {item.title && <h1>{item.title}</h1>}
                {item.description && <p>{item.description}</p>}
                {item.price && <div className="price">${item.price}</div>}
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  <DeleteForeverIcon />
                </button>
                {item.quantity}
              </div>
              <div className="total">
                <span>Subtotal</span>
                {item.price && <span>${item.price * item.quantity}</span>}
              </div>
            </li>
          ))}
          

      </ul>
    </div>
  );
};

export default CartPage;
