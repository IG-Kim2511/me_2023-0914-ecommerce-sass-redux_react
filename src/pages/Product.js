import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data';

const Product = () => {
  // 
  const { id } = useParams();
  
  // 🍉fetchProductData로 찾아낸 data를 여기에 넣고 사용함
  const [product, setProduct] = useState(null);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🍀find id, setProduct
    const fetchProductData = async () => {
      try {
        // 🍉find(~) 
        const productData = products.find((product) => product.id === parseInt(id));

        // setProduct
        if (productData) {
          setProduct(productData);
          setLoading(false);
        } else {        
          console.error(`Product with ID ${id} not found.`);
        }
      } catch (error) {        
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
              <img src={product.images[1]} alt={product.title} />
              <img src={product.images[2]} alt={product.title} />
              
            </div>
            <div className='mainImg'>
              <img src={product.images[0]} alt={product.title} />
            </div>
          </section>
          <section className='right'>
          
          </section>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Product;
