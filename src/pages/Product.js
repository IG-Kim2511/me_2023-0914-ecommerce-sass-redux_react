//Product.js
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
  // const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

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
  const cartItem = useSelector((state)=> state.cart.cartItems);

  const addtocartDispatch = (product, quantity) => {
    const item = {...product,quantity}
    console.log(item)
    
    dispatch(addToCart(item));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div id='product'>
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
            <h1>{product.title}</h1>

            <span className="price">$ {product.price}</span>

            <p>{product.description}</p>
            
     

            {/* ⚡ Handle the addition to the cart with the selected quantity */}
            <button className='addCart' onClick={() => addtocartDispatch(product, quantity)}> <AddShoppingCartIcon/> ADD TO CART</button>
            <div className="links">
              <div className="item"><FavoriteBorderIcon/> ADD TO WISH LIST</div>
            </div>
          </section>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Product;





// <div className="quantity">
// <button
//   /*🦄0127 : -1로 떨어지지 않게 하기
//    값이 1이라면 1로 고정 (더이상 마이너스 떨어지지않음)              
//    default값 : 1 로 만듬 */
//    onClick={() =>
//     setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
//   }
//   >-</button>
// <h3>{quantity}</h3>
// <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
// </div>