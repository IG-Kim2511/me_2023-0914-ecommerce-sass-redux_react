import React, { useState } from "react";
import Filter from "./Filter";
import ProductList from "./ProductList";
import products from "../../data";

const App2 = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const applyFilters = ({ categories, maxPrice, sortOrder }) => {
    // Apply filters based on categories, maxPrice, and sortOrder
    let filtered = [...products];

    if (categories.length > 0) {
      filtered = filtered.filter((product) =>
        categories.includes(product.category)
      );
    }

    filtered = filtered.filter((product) => product.price <= maxPrice);

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>Product Filter App</h1>
      <Filter onFilter={applyFilters} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App2;
