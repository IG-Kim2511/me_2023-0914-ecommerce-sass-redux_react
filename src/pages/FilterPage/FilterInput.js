import React, { useState } from "react";
import { useFilterContext } from "../../context/FilterContext";

const FilterInput = () => {
  
  /* 🍉🦄prop데이터를 자식에서 부모 컴포넌트로 전달했음..
    console- onFilter찍어보면 setFilteredProducts 가 나옴... 
    👉여기에서 set~을 해서 props 자식 컴포넌트인데도 불구하고, 상위컴포넌트에 데이터 전달할 수있는 것임 
    
    🍉prevFilters는 이전 상태 값을 나타내는 변수입니다
  */

  // 🍉
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

  // 🍀applyFilters 👉 button generate
  //onFilter object 만듬
  // input으로 filter된 const들을 onFilter 오브젝트안에 넣어서 결과물 완성시킴

  /*
    FilterPage.js에서 자식 컴포넌트인 Filter에서 호출된 onFilter 함수는 
    필터 매개변수를 받아와서 setFilteredProducts를 사용하여 filteredProducts의 상태를 업데이트합니다.
     이 상태 업데이트는 FilterPage 컴포넌트를 다시 렌더링하고, 그에 따라 필터링된 제품이 표시됩니다.
  */
  // const applyFilters = () => {
  //   onFilter({
  //     categories: categoryFilters,
  //     maxPrice: priceFilter,
  //     sortOrder: sortOrder,
  //   });
  // };

  return (
    <div id="FilterInput">
      <h2>Filter Products</h2>
      <h3>Categories</h3>

      {/* 🍀input checkbox */}
      <section className="checkboxWrapper">
          <label>
            <input
              type="checkbox"
              value="smartphones"
              //🦄onChange : input attribute가 onChange한때 handleCategoryChange function 실행
              onChange={handleCategoryChange}
              // 🦄input checked Attribute
              checked={categoryFilters.includes("smartphones")}
            />
            Smartphones
          </label>
          <label>
            <input
              type="checkbox"
              value="laptops"
              onChange={handleCategoryChange}
              checked={categoryFilters.includes("laptops")}
            />
            Laptops
          </label>
          <label>
            <input
              type="checkbox"
              value="fragrances"
              onChange={handleCategoryChange}
              checked={categoryFilters.includes("fragrances")}
            />
            Fragrances
          </label>
          <label>
            <input
              type="checkbox"
              value="skincare"
              onChange={handleCategoryChange}
              checked={categoryFilters.includes("skincare")}
            />
            Skincare
          </label>
          <label>
            <input
              type="checkbox"
              value="groceries"
              onChange={handleCategoryChange}
              checked={categoryFilters.includes("groceries")}
            />
            Groceries
          </label>
          <label>
            <input
              type="checkbox"
              value="home-decoration"
              onChange={handleCategoryChange}
              checked={categoryFilters.includes("home-decoration")}
            />
            Home Decoration
          </label>
      </section>
      {/* 🍀input range */}
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

      {/* 🍀input radio */}
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

      {/* 🦄applyFilters */}
      <button className="myButton" onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterInput;
