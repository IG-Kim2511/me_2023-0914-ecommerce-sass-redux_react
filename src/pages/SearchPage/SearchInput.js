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
      // Prevent the default form submission behavior
      e.preventDefault();
      handleSearch(searchTerm); // Proceed with the search
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
            // You can handle the Enter key press here if needed

            onKeyPress={handleKeyPress}
            />
        </section>
        
    
    
    </div>
  )
}

export default SearchInput