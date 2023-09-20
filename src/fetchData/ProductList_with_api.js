import React, { useState, useEffect } from 'react';

function ProductList_with_api() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Data is not an array:', data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
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
    </div>
  );
}

export default ProductList_with_api;
