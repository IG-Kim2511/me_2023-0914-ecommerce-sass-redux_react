import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data';

const Product = () => {
  // Use destructuring to get the "id" parameter from the URL
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate loading data from your products array or an API
    const fetchProductData = async () => {
      try {
        // Assuming products is an array of objects, find the product by id
        const productData = products.find((product) => product.id === parseInt(id));

        if (productData) {
          setProduct(productData);
          setLoading(false);
        } else {
          // Handle the case where the product with the given id is not found
          console.error(`Product with ID ${id} not found.`);
        }
      } catch (error) {
        // Handle any errors that occur during data fetching
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  return (
    <div id='product'>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div>
          <section className='left'>
            <div className='images'>
              <img src={product.images[0]} alt={product.title} />
              {/* Add additional images as needed */}
            </div>
            <div className='mainImg'>
              <img src={product.images[0]} alt={product.title} />
            </div>
          </section>
          <section className='right'>
            {/* Add content for the right section as needed */}
          </section>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Product;
