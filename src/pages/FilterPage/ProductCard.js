import React from 'react';

function ProductCard({ product }) {
  return (
    <li>
      {/* Render product card details here */}
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      {/* Add more product details as needed */}
    </li>
  );
}

export default ProductCard;
