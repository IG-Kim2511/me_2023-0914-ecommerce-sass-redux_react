import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [categoryFilters, setCategoryFilters] = useState([]);
  
  const [minPriceFilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");

  const [sortOrder, setSortOrder] = useState("asc");

  // ... other filter-related code ...

  return (
    <FilterContext.Provider
      value={{
        categoryFilters,
        setCategoryFilters,
        minPriceFilter,
        setMinPriceFilter,
        maxPriceFilter,
        setMaxPriceFilter,
        sortOrder,
        setSortOrder,
        applyFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
