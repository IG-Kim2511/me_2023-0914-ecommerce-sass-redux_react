import React from 'react';
import { useSearchContext } from '../../context/SearchContext'; // Import the useSearchContext hook
import products from '../../data'; // Import your product data (assuming it's in productData.js)
import SearchInput from './SearchInput';

const SearchPage = () => {
  const { searchTerm } = useSearchContext(); // Access the search term from context

  // Filter the products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>SearchPage</h1>

      <main className="left">
        <SearchInput/>      
      </main>
      <main className="right">
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
            {product.title} - ${product.price}
            </li>
            ))}
        </ul>
      </main>
    </div>
  );
};

export default SearchPage;
