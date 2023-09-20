import React, { useState, useEffect } from 'react';
import { fetchProducts } from './data_api_fetchProducts'; // Adjust the path to the api.js file

function ProductList_without_api() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                {product.images.length > 0 && (
                  <img
                    src={product.images[0]} // Display the first image in the array
                    alt={product.title}
                    style={{ width: '100px', height: '100px' }}
                  />
                )}
              </div>
              <div>
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList_without_api;
