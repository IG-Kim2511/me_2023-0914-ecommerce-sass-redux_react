// SearchInput.js
import React from 'react'
import { useSearchContext } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
     
    const navigate = useNavigate();
  // 🍉 context-search context  
  const {
    searchTerm,
    setSearchTerm,            
  } = useSearchContext(); // Use the context

  const handleSearch = (term) => {
    setSearchTerm(term);

  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearchInputChange = (e) => {
    handleSearch(e.target.value);
  };


  return (
    <div id='SearchInput'>
    
        <section>   
            <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchInputChange}
            // You can handle the Enter key press here if needed

            // onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>Search</button>
        </section>
        
    
    
    </div>
  )
}

export default SearchInput