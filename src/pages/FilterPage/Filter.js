import React, { useState } from "react";

const Filter = ({ onFilter }) => {

  // 🍉
  const [categoryFilters, setCategoryFilters] = useState([]);

  const [priceFilter, setPriceFilter] = useState(1800);

  const [sortOrder, setSortOrder] = useState("asc");

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
    🍉prop데이터를 자식에서 부모 컴포넌트로 전달했음..
    
    React에서 데이터는 주로 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 전달됩니다. 
    그러나 자식 컴포넌트에서 부모 컴포넌트로 데이터와 함수를 전달하는 방법도 있습니다. 
    여러분의 코드에서 onFilter 함수는 Filter 컴포넌트(자식)에서 FilterPage 컴포넌트(부모)로 전달되고 있습니다. 
    작동 방식은 다음과 같습니다:

    FilterPage.js에서 applyFilters 함수는 부모 컴포넌트인 FilterPage에서 정의됩니다. 
    이 함수는 부모 컴포넌트(FilterPage)에서 자식 컴포넌트인 Filter로 prop으로 전달됩니다.

    Filter.js에서 "Apply Filters" 버튼이 클릭되면 applyFilters 함수가 호출됩니다. 
    이 함수는 다시 자식 컴포넌트에서 부모 컴포넌트로 전달된 onFilter 함수를 호출합니다.

    Filter.js에서 applyFilters 함수가 호출될 때, onFilter 함수가 호출되고, 
    이 때 필터 매개변수 (카테고리, 최대 가격, 정렬 순서)를 포함한 객체를 인자로 전달합니다.

    FilterPage.js에서 자식 컴포넌트인 Filter에서 호출된 onFilter 함수는 
    필터 매개변수를 받아와서 setFilteredProducts를 사용하여 filteredProducts의 상태를 업데이트합니다.
     이 상태 업데이트는 FilterPage 컴포넌트를 다시 렌더링하고, 그에 따라 필터링된 제품이 표시됩니다.

    요약하면, props는 주로 데이터를 부모 컴포넌트에서 자식 컴포넌트로 전달하는 데 사용되지만, 
    함수를 자 컴포넌트에서 부모 컴포넌트로 전달하는 방법으로도 사용할 수 있습니다. 
    이것이 Filter에서의 onFilter 함수가 FilterPage의 filteredProducts 상태와 상호 작용하고 업데이트하는 방법입니다.
  */
  const applyFilters = () => {
    onFilter({
      categories: categoryFilters,
      maxPrice: priceFilter,
      sortOrder: sortOrder,
    });
  };

  return (
    <div id="Filter">
      <h2>Filter Products</h2>
      <h3>Categories</h3>

      {/* 🍀input checkbox */}
      <section className="checkboxWrapper">
          <label>
            <input
              type="checkbox"
              value="smartphones"
              //🦄onChange
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

export default Filter;
