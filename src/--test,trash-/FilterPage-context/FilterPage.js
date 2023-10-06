import React, { useContext } from "react";
import Filter from "./Filter";
import { FilterContext } from "../../context/Context";
import { Link } from "react-router-dom";

const FilterPage = () => {
  // ... Use the useFilter hook to access filter context values

  const { filteredProducts} = useContext(FilterContext)
  

  return (
   
    <div id="FilterPage">      
      <section className="wrapper">
        <div className="left">
          {/* 🦄*/}
          <Filter />      
        </div>
        <main className="right">
        {/* 🦄*/}
          {/* <ProductsFiltered filteredProducts={filteredProducts} /> */}
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
                                  <h4 className="stock">(stock : {item.stock})</h4>
                              </div>
                              </section>
                          </div>
                      </Link>
                  ))}   
                </ul>
              )}
            </section>
          </div>
        </main>
      </section>
    </div>
  );
};

export default FilterPage;
