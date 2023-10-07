import React from 'react';
import { useSearchContext } from './SearchContext'; // Import the useSearchContext hook
import products from '../../data'; // Import your product data (assuming it's in productData.js)

const Product = () => {
  const { searchTerm } = useSearchContext(); // Access the search term from context

  // Filter the products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
