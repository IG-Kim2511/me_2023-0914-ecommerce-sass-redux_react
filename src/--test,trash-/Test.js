import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// 🍉redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/reducers/cartReducer';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

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

  // 🍀redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  const addProductToCart = (product) => {
    // Dispatch the addToCart action with the product object
    dispatch(addToCart(product));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div id='product'>
          {/* Rest of your component */}
          <button className='addCart' onClick={() => addProductToCart(product)}>
            <AddShoppingCartIcon /> ADD TO CART
          </button>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Product;
