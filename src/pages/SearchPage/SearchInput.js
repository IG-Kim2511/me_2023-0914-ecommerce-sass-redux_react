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
    const formattedSearchTerm = typeof term === "string" ? term : "";
    setSearchTerm(formattedSearchTerm);  
  };

  const handleSearchInputChange = (e) => {
    handleSearch(e.target.value);
  };


  return (
    <div id='SearchInput'>
    
        <section>   
            <input
            className='input-search'
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchInputChange}
            // You can handle the Enter key press here if needed

            // onKeyPress={handleKeyPress}
            />
        </section>
        
    
    
    </div>
  )
}

export default SearchInput