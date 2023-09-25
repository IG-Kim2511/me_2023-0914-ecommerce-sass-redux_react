// src/components/ProductList.js
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/productActions';

const ProductList = (props) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={() => props.addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
  };
};

export default connect(mapStateToProps, { addToCart })(ProductList);