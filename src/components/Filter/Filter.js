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

  // applyFilters 👉 button generate
  const applyFilters = () => {
    //🍉 onFilter object 만듬
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
