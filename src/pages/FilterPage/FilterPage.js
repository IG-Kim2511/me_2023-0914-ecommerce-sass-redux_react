import React from 'react';

import { useFilter } from '../../context/FilterContext';
import products from '../../data' // Replace with your product data source
import { Link } from 'react-router-dom';
import FilterInput from './FilterInput';

function FilterPage() {
  const {
    categoryFilters,
    priceFilter,
    sortOrder,
    applyFilters,
  } = useFilter();

  // Apply filters to products
  const filteredProducts = products
    .filter(product => (
      categoryFilters.length === 0 || categoryFilters.includes(product.category)
    ))
    .filter(product => product.price <= priceFilter)
    .sort((a, b) => (
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    ));

  return (
    <div id="FilterPage">      
      <section className="wrapper">

          <main className="left">
     
          <FilterInput />      
        </main> 

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
}

export default FilterPage;
