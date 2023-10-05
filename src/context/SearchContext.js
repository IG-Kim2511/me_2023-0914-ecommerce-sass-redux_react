// SearchContext.js
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();






export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  const contextValue = {
    searchQuery,
    setSearchQuery,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}
