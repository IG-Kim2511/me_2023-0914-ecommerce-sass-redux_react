

import React, { useContext, useReducer, useState } from 'react';
import SearchContext from './Context';

// 🍉action type


// 🍀initialState


// 🍀reducer

export function useSearch() {
    return useContext(SearchContext);
  }
  
// Search provider component
export function SearchProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState('');
  
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