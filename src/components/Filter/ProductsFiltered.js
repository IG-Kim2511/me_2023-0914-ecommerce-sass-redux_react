import React from "react";
import { Link } from "react-router-dom";

const ProductsFiltered = ({ filteredProducts }) => {
  return (
    <div id="ProductsFiltered">
      <h2>Filtered Products</h2>

      <section>
        {filteredProducts.length === 0 ? (
          <p>No results</p>
        ) : (
          <ul className="bottom">
            {filteredProducts.map((item) => (

              // 🦄link to product.js 
            <Link className='link' to={`/product/${item.id}`} key={item.id}>

                <div className="card">
                    {/* 🦄q: hover하면 이미지가 바뀜.
                        컨테이너안에 이미지가 2개있어야 함 */}
                    <section className='imageWrap'>
                        <img src={item.images[0]} className="mainImg" alt={item.title} />
                        <img src={item.images[2]} className="secondImg" alt={item.title} />
                    </section>
                    <section className='titleWrapper'>
                    <h4 className='title'>{item.title} <span>(id:{item.id})</span></h4>
                    <div className='prices'>
                        <h4>price : {item.price}</h4>
                        <h4>(stock : {item.stock})</h4>
                    </div>
                    </section>
                </div>
            </Link>
        ))}         

          </ul>
        )}
      </section>
    </div>
  );
};

export default ProductsFiltered;


// {products.map((product) => (
//   <li key={product.id}>
//     <h3>{product.title}</h3>
//     <p>Category: {product.category}</p>
//     <p>Price: ${product.price}</p>
//     <p>Rating: {product.rating}</p>
//   </li>
// ))}
