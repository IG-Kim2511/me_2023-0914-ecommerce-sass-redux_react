import React, { useState } from "react";
import { useFilterContext } from "../../context/FilterContext";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../../context/SearchContext";

const FilterInput = () => {

  // 🍀useNavigate (= useHistory new version)
  const navigate = useNavigate();  

  /* 
    🦄prop데이터를 자식에서 부모 컴포넌트로 전달했음..     
    👉여기에서 set~을 해서 context api에 데이터 전달함
    🍉prevFilters는 이전 상태 값을 나타내는 변수입니다
  */


  // 🍉context-useFilterContext  
  const {
    categoryFilters,setCategoryFilters,
    priceFilter,setPriceFilter,
    sortOrder,setSortOrder,
    applyFilters,
  } = useFilterContext();


  // 🍉input checkbox
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCategoryFilters((prevFilters) => [...prevFilters, value]);
    } else {
      setCategoryFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== value)
      );
    }
  };

  // 🍉input range
  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  // 🍉input radio
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  

  return (
    <div id="FilterInput">
      <h2>Filter Products</h2>
      <h3>Categories</h3>


      {/* 🍀input checkbox */}
      <section className="checkboxWrapper">   
        { 
          ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"].map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              value={category}
              //🦄onChange : input attribute가 onChange한때 handleCategoryChange function 실행
              onChange={handleCategoryChange}
                // 🦄input checked Attribute
              checked={categoryFilters.includes(category)}
            />
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </label>
        ))
       }      
      </section>

      {/* 🍀 Price-input range */}
      <section>
        <h3>Price</h3>
        <input
          type="range"
          min="0"
          max="1800" 
          value={priceFilter}
          onChange={handlePriceChange}
        />
        <p>Price range: $0~ ${priceFilter}</p>
      </section>

      {/* 🍀 Sort-input radio */}
      <section>
        <h3>Sort Order</h3>
        <label>
          <input
            type="radio"
            name="sortOrder"
            value="asc"
            onChange={handleSortChange}

            // 🦄input checked Attribute
            checked={sortOrder === "asc"}
          />
          Ascending
        </label>
        <label>
          <input
            type="radio"
            name="sortOrder"
            value="desc"
            onChange={handleSortChange}
            checked={sortOrder === "desc"}
          />
          Descending
        </label>
      </section>

    </div>
  );
};

export default FilterInput;
