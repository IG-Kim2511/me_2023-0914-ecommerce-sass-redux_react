
/* 

🚀filterPage.js
redering filtered product with input range, radio, checkbox. 
*/

/* 🎃-ing

cart.js
redux

filter page 리덕스로 다시 만들기


constext api
 */

// 🦄router v6 version coding

import React from 'react'
// 🦄전체 scss 한개파일에 몰아서 정리하기 (공부용이니까)
import './App.scss';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Home from '../pages/Home';
import FilterPage from '../components/Filter/FilterPage';


// 🍉Layout
const Layout = () => {
  return (
    <div className="app">
      <Navbar />

      {/* 🍉children👉 <Outlet/> */}
      <Outlet />
      <Footer />      
    </div>
  );
};

// 🍀router
// 🍉createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // 🍉children
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/all",
        element: <FilterPage/>,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
    {/* 🍉<RouterProvider router={router} />  */}
      <RouterProvider router={router} /> 
    </div>
  )
}

export default App



