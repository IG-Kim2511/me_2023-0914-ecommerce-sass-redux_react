const Cart = (props) => {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {props.cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}{' '}
              <button onClick={() => props.removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const mapStateToProps = (state) => {
    return {
      cartItems: state.cart.cartItems,
    };
  };
  
  export default connect(mapStateToProps, { removeFromCart })(Cart);