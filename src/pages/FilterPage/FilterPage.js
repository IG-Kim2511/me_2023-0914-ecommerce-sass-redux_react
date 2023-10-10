import React from 'react';

import { useFilterContext } from '../../context/FilterContext';
import products from '../../data' // Replace with your product data source
import { Link } from 'react-router-dom';
import FilterInput from './FilterInput';

function FilterPage() {
  const {
    categoryFilters,
    priceFilter,
    priceRange_Filter,
    sortOrder,
    applyFilters,
    renderResults,
  } = useFilterContext();

  // filteredProducts and rendering
  /*  🦄 <= priceFilter: 이 부분은 검사되는 조건입니다. 
   <=는 비교 연산자로, product의 price가 사용자가 설정한 priceFilter 값보다 작거나 같은지 확인합니다. */
  const filteredProducts = products.filter(product => (
    // category
      categoryFilters.length === 0 || categoryFilters.includes(product.category)
    ))
    // priceFilter
    .filter(product => product.price <= priceFilter)
    // priceRange_Filter
    .filter((product) => { 
      const meetsMinPriceFilter =
        priceRange_Filter.min === "" || product.price >= parseFloat(priceRange_Filter.min);


      const meetsMaxPriceFilter =
        priceRange_Filter.max === "" || product.price <= parseFloat(priceRange_Filter.max);

      return meetsMinPriceFilter && meetsMaxPriceFilter;
    })
    // sort
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
         
            {/* 🍉 js112 renderResults */}
            {renderResults ? (
              <div>
               <h2>All Products</h2>
              </div>
            )
              : (
              <section>
                {filteredProducts.length === 0 ? (
                  <p>No results</p>
                ) : (
                  <div>
                    <h2>Filtered Products</h2>                 
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
                                        <h4>price : $ {item.price}</h4>
                                        <h4 className="stock">(stock : {item.stock})</h4>
                                    </div>
                                    </section>
                                </div>
                            </Link>
                          ))}   
                        </ul>
                  </div>
                  )}
                </section>
                
              )
            }
           
          </div>
        </main>
      </section>
    </div>
  );
}

export default FilterPage;
