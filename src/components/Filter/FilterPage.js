// 🚀redering filtered product with input range, radio, checkbox. 

import React, { useState } from "react";
import Filter from "./Filter";
import ProductsFiltered from "./ProductsFiltered";
import products from "../../data";

const FilterPage = () => {
  // 🦄filteredProducts
  const [filteredProducts, setFilteredProducts] = useState(products);

  // 🦄applyFilters
  const applyFilters = ({ categories, maxPrice, sortOrder }) => {
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
        <Filter onFilter={applyFilters} />      
      </div>
      <div className="right">
       {/* 🦄*/}
        <ProductsFiltered filteredProducts={filteredProducts} />
      </div>
      </section>
    </div>
  );
};

export default FilterPage;
