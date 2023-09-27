            
            
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../data';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import UndoIcon from '@mui/icons-material/Undo';

// ...

const Product = () => {
  // ...

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // ...

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

          {/* ...rest of your component */}
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default Product;
