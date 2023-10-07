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

  // onchange
  const handleSearchInputChange = (e) => {
    
    const term = e.target.value
    
    const formattedSearchTerm = typeof term === "string" ? term : "";
    setSearchTerm(formattedSearchTerm);  
  };

  // onClick
  const handleSearch = (term) => {
    const formattedSearchTerm = typeof term === "string" ? term : "";
    setSearchTerm(formattedSearchTerm);  

    setSearchTerm('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {      
      e.preventDefault();// Prevent the default form submission behavior
      handleSearch(searchTerm);
    }
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
            onKeyPress={handleKeyPress}
            />
        </section>
    </div>
  )
}

export default SearchInput