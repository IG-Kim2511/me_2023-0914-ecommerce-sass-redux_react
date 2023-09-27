// FilterPage.js
import React from "react";
import { connect } from "react-redux";
import Filter from "./Filter";
import ProductsFiltered from "./ProductsFiltered";
import { setCategoriesFilter, setMaxPriceFilter, setSortOrder } from "../../actions/filterActions";

const FilterPage = ({ filteredProducts, setCategoriesFilter, setMaxPriceFilter, setSortOrder }) => {
  // ... Existing code ...

  return (
    <div id="FilterPage">
      <section className="wrapper">
        <div className="left">
          <Filter
            onFilter={({ categories, maxPrice, sortOrder }) => {
              setCategoriesFilter(categories);
              setMaxPriceFilter(maxPrice);
              setSortOrder(sortOrder);
            }}
          />
        </div>
        <div className="right">
          <ProductsFiltered filteredProducts={filteredProducts} />
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filteredProducts: state.filter.filteredProducts,
});

const mapDispatchToProps = {
  setCategoriesFilter,
  setMaxPriceFilter,
  setSortOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPage);
