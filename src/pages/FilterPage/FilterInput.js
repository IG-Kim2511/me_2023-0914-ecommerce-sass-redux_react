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
    priceRange_Filter, setPriceRange_Filter,
    sortOrder,setSortOrder,
    applyFilters,
    renderResults, setRenderResults,
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

  // 🍉input-price2 - PriceRange_Filter
  const handleMinPriceChange = (e) => {
    setPriceRange_Filter((prevPriceFilter) => ({
      ...prevPriceFilter,
      min: e.target.value,
    }));
  };

  const handleMaxPriceChange = (e) => {
    setPriceRange_Filter((prevPriceFilter) => ({
      ...prevPriceFilter,
      max: e.target.value,
    }));
  };

/*   const handle_PriceRange_Filters = () => {
    applyFilters({
      minPrice: priceRange_Filter.min,
      maxPrice: priceRange_Filter.max,
    });
  }; */
  
  // 🍉 js112 renderResults
  const handleRenderResults = () => {
    setRenderResults(!renderResults)
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

      {/* PriceRange_Filter */}
      <section className="Price2">
 {/*        <div>Under $25</div>
        <div>$25 to $50</div>
        <div>$50 to $100</div>
        <div>$100 to $200</div>
        <div>$200 & Above</div>     */} 
        <form className="input-wrap"> 
          <input
              type="text"
              className="input-text"
              placeholder="$ min"
              value={priceRange_Filter.min}
              onChange={handleMinPriceChange}
            />

          <span>~</span>

          <input
              type="text"
              className="input-text"
              placeholder="$ max"
              value={priceRange_Filter.max}
              onChange={handleMaxPriceChange}
            />
        </form>      
      </section>

      {/* 🍀 Sort-input radio */}
      <section className="Sort"> 
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
      <section>        
        <button
          type="button"
          className="myButton smallBtn"
          onClick={handleRenderResults}
          >
          Go
        </button>   
      </section>

    </div>
  );
};

export default FilterInput;
