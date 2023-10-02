import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../data';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UndoIcon from '@mui/icons-material/Undo';

// 🍉redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/reducers/cartReducer';

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  //🍀 navigate(-1)
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Use -1 to navigate back to the previous page
  };

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
  
  const addtocartDispatch = (product) => {
    
    console.log(product)
    console.log(cartItem)
    dispatch(addToCart(product));
  };

  // 🍀mainImg switch
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : product ? (
        <div id='product'>
          <section className='left'>
            <div className='images'>
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={product.title}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
            <div className='mainImg'>
              <img
                src={product.images[selectedImageIndex]}
                alt={product.title}
              />
            </div>
          </section>
          <section className='right'>
            <h1>{product.title}</h1>

            <span className="price">$ {product.price}</span>

            <p>{product.description}</p>


            {/* ⚡ Handle the addition to the cart with the selected quantity */}
            <button className='myButton productBtn' onClick={() => addtocartDispatch(product)}> <AddShoppingCartIcon/> ADD TO CART</button>

            {/* navigate(-1) */}
            <button className='myButton productBtn' onClick={handleGoBack}><UndoIcon/> Back</button>
          
          </section>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Product;


            
