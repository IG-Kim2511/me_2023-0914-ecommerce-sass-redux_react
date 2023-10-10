// FilterContext.js
import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [selectedOption, setSelectedOption] = useState('');

  
  const [renderResults, setRenderResults] = useState(false);

  return (
    <FilterContext.Provider
      value={{ selectedOption, setSelectedOption, renderResults, setRenderResults }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
