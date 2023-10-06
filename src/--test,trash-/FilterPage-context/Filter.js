import React, { useContext } from "react";
import { FilterContext } from "../../context/Context";

const Filter = () => {    

  const {categoryFilters, priceFilter, sortOrder, onFilter, applyFilters: applyContextFilters, // Rename the destructured variable
} = useContext(FilterContext);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    const updatedCategories = checked
      ? [...categoryFilters, value]
      : categoryFilters.filter((filter) => filter !== value);
      applyContextFilters({
      categories: updatedCategories,
      maxPrice: priceFilter,
      sortOrder,
    });
    onFilter(categoryFilters, priceFilter, sortOrder);
  };

  const handlePriceChange = (e) => {
    applyContextFilters({
      categories: categoryFilters,
      maxPrice: e.target.value,
      sortOrder,
    });
    onFilter(categoryFilters, priceFilter, sortOrder);
  };

  const handleSortChange = (e) => {
    applyContextFilters({
      categories: categoryFilters,
      maxPrice: priceFilter,
      sortOrder: e.target.value,
    });
    onFilter(categoryFilters, priceFilter, sortOrder);
  };

  // const handleApplyFilters  = () => {
  //   // Implement your filtering logic here
  //   // Update the filtered products based on the context values
  // };

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
  {/*           <button className="myButton" onClick={handleApplyFilters}>
                Apply Filters
            </button> */}
    </div>
  );
};

export default Filter;
