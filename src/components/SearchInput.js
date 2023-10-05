// SearchInput.js
import React from "react";
import { useSearch } from "./SearchContext";

function SearchInput({searchQuery,setSearchQuery}) {
//   const { searchQuery, setSearchQuery } = useSearch();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleInputChange}
    />
  );
}

export default SearchInput;
