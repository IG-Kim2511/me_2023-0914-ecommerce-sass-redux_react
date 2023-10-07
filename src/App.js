
/* 

🚀filterPage.js
redering filtered product with input range, radio, checkbox. 
*/

/* 🎃-ing
  constext api
  filter page 리덕스로 다시 만들기
  input search feature
*/

import React from 'react';
// 🦄전체 scss 한개파일에 몰아서 정리하기 (공부용이니까)
import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/Products';
import Product from './pages/Product';
import Home from './pages/Home';
import FilterPage from './pages/FilterPage/FilterPage';
import CartPage from './pages/CartPage';

import Product_Searched from './pages/FilterPage/Product_Searched';



const App = () => {  
  return (   
      <div id="app">
        
        <Navbar/>
        <Product_Searched/>
                
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<FilterPage />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<Product />} /> 
          <Route path="/cart" element={<CartPage />} />

            {/* 🦄Catch-all route for unmatched paths */}
           <Route path="/*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;
