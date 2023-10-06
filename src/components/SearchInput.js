// SearchInput.js
import React from "react";
import { useSearch } from "./SearchContext";

function SearchInput({contextValue}) {
//   const { searchQuery, setSearchQuery } = useSearch();

  const handleInputChange = (e) => {
    contextValue.setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={contextValue.searchQuery}
      onChange={handleInputChange}
    />
  );
}

export default SearchInput;
