import React, { useState } from "react";

const Filter = ({ onFilter }) => {
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceFilter, setPriceFilter] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc");

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

  const handlePriceChange = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

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
      <section>
          <h3>Categories</h3>
          <label>
            <input
              type="checkbox"
              value="smartphones"
              onChange={handleCategoryChange}
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
      <section>
        <h3>Price</h3>
        <input
          type="range"
          min="0"
          max="1800" // Adjust the max price as per your data
          value={priceFilter}
          onChange={handlePriceChange}
        />
        <p>Max Price: ${priceFilter}</p>
      </section>
      <section>
        <h3>Sort Order</h3>
        <label>
          <input
            type="radio"
            name="sortOrder"
            value="asc"
            onChange={handleSortChange}
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
      <button className="myButton" onClick={applyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filter;
