import React, { createContext, useContext, useState } from 'react';
import { FilterContext } from '../../context/Context';
import products from '../../data';

export function FilterState({ children }) {
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [priceFilter, setPriceFilter] = useState(1800);
  const [sortOrder, setSortOrder] = useState('asc');

  const applyFiltersToContext = ({ categories, maxPrice, sortOrder }) => {
    setCategoryFilters(categories);
    setPriceFilter(maxPrice);
    setSortOrder(sortOrder);
  };


  // 🦄filteredProducts
  const [filteredProducts, setFilteredProducts] = useState(products);

  // 🦄 onFilter
  const onFilter = ({ categories, maxPrice, sortOrder }) => {
    // 🍀filtered array 만듬, based on categories, maxPrice, and sortOrder
    let filtered = [...products];

    // 🍉filtered array 에 input-checkbox-category에서 체크된 항목 filter(~)
    if (categories.length > 0) {
      filtered = filtered.filter((product) =>
        categories.includes(product.category)
      );
    }

    // 🍉filtered array 에 input-range- price에서 선택된 항목 filter(~) 
    filtered = filtered.filter((product) => product.price <= maxPrice);

    // 🍉filtered array 에 input radio에서 ascending descending 선택된 항목 filter(~) 
    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else {
      filtered.sort((a, b) => b.price - a.price);
    }

    // 🍉setFilteredProducts
    setFilteredProducts(filtered);
  };

  return (
    <FilterContext.Provider
      value={{
        categoryFilters,
        priceFilter,
        sortOrder,
        applyFilters: applyFiltersToContext,
        onFilter,
        filteredProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
