
// SearchPage.js
import React from 'react';
import { useSearchContext } from '../../context/SearchContext'; // Import the useSearchContext hook
import products from '../../data'; // Import your product data (assuming it's in productData.js)
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  const { searchTerm } = useSearchContext(); // Access the search term from context

  // Filter the products based on the search term
  // const filteredProducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredProducts = products.filter((product) =>
    searchTerm && product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id='SearchPage'>
      <h1>SearchPage</h1>

      <section className="wrapper">      
        <main className="left">
          <SearchInput/>      
        </main>
        <main className="right">
      
          {filteredProducts.length === 0 ? (
            <div>
              <h3>All items list to search</h3>
              <div>
                {products.map((item)=>(<div>{item.title}</div>))}
              </div>
            </div>
          ) : (
            <ul className="bottom">
              {filteredProducts.map((item) => (

                    // 🦄link to product.js 
                  <Link className='link' to={`/product/${item.id}`} key={item.id}>
      
                      <div className="card">
                          {/* 🦄q: hover하면 이미지가 바뀜.
                              컨테이너안에 이미지가 2개있어야 함 */}
                          <section className='imageWrap'>
                              <img src={item.images[0]} className="mainImg" alt={item.title} />
                              <img src={item.images[2]} className="secondImg" alt={item.title} />
                          </section>
                          <section className='titleWrapper'>
                          <h4 className='title'>{item.title} <span>(id:{item.id})</span></h4>
                          <div className='prices'>
                              <h4>price : $ {item.price}</h4>
                              <h4 className="stock">(stock : {item.stock})</h4>
                          </div>
                          </section>
                      </div>
                  </Link>
              ))}   
            </ul>
          )}     
        </main>
      </section>
    </div>
  );
};

export default SearchPage;
