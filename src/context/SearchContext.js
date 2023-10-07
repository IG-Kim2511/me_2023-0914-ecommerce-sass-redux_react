import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const SearchContext = createContext();

export function SearchProvider({ children }) {


  const [searchTerm, setSearchTerm] = useState("");






  return (
    <SearchContext.Provider
      value={{
        searchTerm,setSearchTerm,                
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  return useContext(SearchContext);
}
