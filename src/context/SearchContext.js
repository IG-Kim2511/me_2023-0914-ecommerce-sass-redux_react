import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <SearchContext.Provider value={{ searchTerm, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
