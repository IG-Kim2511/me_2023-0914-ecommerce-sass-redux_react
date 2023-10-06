// SearchState.js
import React, { useContext, useState } from 'react';

import products from '../data';
import { SearchContext } from './Context';

const searchedProducts=[];


export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Trigger the search action here, you can use setSearchQuery if needed
      console.log('Enter key pressed. Perform search here.');
      
      searchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  };


  const contextValue = {
    searchQuery,
    setSearchQuery,    
    handleInputChange,
    searchedProducts,
    handleKeyPress, // Add the handleKeyPress function to the context
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}
