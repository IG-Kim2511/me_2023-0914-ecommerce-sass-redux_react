import React from 'react'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartPage = () => {
  return (
    <div id='CartPage'>
        <h1>Cart</h1>
        {/* product?.map */}
        <section className="item">
            <img/>
            <div className="details">
                <h1>title</h1>
                <p>desc</p>
                <div className="price">price</div>
                <DeleteForeverIcon/>
            </div>
            <div className="total">
                <span>subtotal</span>
                <span>subtotal price</span>                
            </div>
            <button>checkout</button>
            <span className="reset">reset cart</span>        
        </section>
    </div>
  )
}

export default CartPage