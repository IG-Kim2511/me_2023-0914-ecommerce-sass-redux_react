import React from "react";
import { useFilterContext } from "../../context/FilterContext";

const FilterInput = () => {
  const {
    minPriceFilter,
    setMinPriceFilter,
    maxPriceFilter,
    setMaxPriceFilter,
    
    applyFilters,
  } = useFilterContext();

  const handleMinPriceChange = (e) => {
    setMinPriceFilter(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPriceFilter(e.target.value);
  };

  const handleApplyFilters = () => {
    // You can perform filtering and other actions here
    applyFilters({
      // ...other filter parameters...
      minPrice: minPriceFilter,
      maxPrice: maxPriceFilter,
    });
  };

  return (
    <div id="FilterInput">
      <h2>Filter Products</h2>
      <h3>Price Range</h3>
      <section className="Price2">
        <div>
          <input
            type="text"
            className="input-text"
            placeholder="$ min"
            value={minPriceFilter}
            onChange={handleMinPriceChange}
          />
        </div>
        <div>
          <input
            type="text"
            className="input-text"
            placeholder="$ max"
            value={maxPriceFilter}
            onChange={handleMaxPriceChange}
          />
        </div>
        <div className="input-wrap">
          <button
            type="button"
            className="myButton smallBtn"
            onClick={handleApplyFilters}
          >
            Go
          </button>
        </div>
      </section>
    </div>
  );
};

export default FilterInput;
