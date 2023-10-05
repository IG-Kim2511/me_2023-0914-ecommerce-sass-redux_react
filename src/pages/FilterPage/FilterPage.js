// 🚀redering filtered product with input range, radio, checkbox. 



import React, { useState } from "react";
import Filter from "./Filter";
// import ProductsFiltered from "../../--test,trash-/ProductsFiltered";
import products from "../../data";
import { Link } from "react-router-dom";

const FilterPage = () => {

  

  // 🦄filteredProducts
  const [filteredProducts, setFilteredProducts] = useState(products);

  // 🦄 onFilter
  const onFilter = ({ categories, maxPrice, sortOrder }) => {
    // 🍀filtered array 만듬, based on categories, maxPrice, and sortOrder
    let filtered = [...products];

    // 🍉filtered array 에 input-checkbox-category에서 체크된 항목 filter(~)
    if (categories.length > 0) {
      filtered = filtered.filter((product) =>
        categories.includes(product.category)
      );
    }

    // 🍉filtered array 에 input-range- price에서 선택된 항목 filter(~) 
    filtered = filtered.filter((product) => product.price <= maxPrice);

    // 🍉filtered array 에 input radio에서 ascending descending 선택된 항목 filter(~) 
    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else {
      filtered.sort((a, b) => b.price - a.price);
    }

    // 🍉setFilteredProducts
    setFilteredProducts(filtered);
  };

  return (
    <div id="FilterPage">      
      <section className="wrapper">
        <div className="left">
          {/* 🦄*/}
          <Filter onFilter={onFilter} />      
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
