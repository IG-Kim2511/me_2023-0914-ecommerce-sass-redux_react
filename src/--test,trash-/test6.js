// Filter.js
import React from "react";
import { connect } from "react-redux";
import {
  setCategoriesFilter,
  setMaxPriceFilter,
  setSortOrder,
} from "../../actions/filterActions";

const Filter = ({
  categories,
  maxPrice,
  sortOrder,
  setCategoriesFilter,
  setMaxPriceFilter,
  setSortOrder,
}) => {
  // ... Existing code ...

  const applyFilters = () => {
    // Dispatch actions to update Redux store
    setCategoriesFilter(categoryFilters);
    setMaxPriceFilter(priceFilter);
    setSortOrder(sortOrder);
  };

  return (
    // ... Existing code ...
  );
};

const mapStateToProps = (state) => ({
  categories: state.filter.categories,
  maxPrice: state.filter.maxPrice,
  sortOrder: state.filter.sortOrder,
});

const mapDispatchToProps = {
  setCategoriesFilter,
  setMaxPriceFilter,
  setSortOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
