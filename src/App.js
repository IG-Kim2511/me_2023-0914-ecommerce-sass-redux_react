import React from 'react'
// 🦄전체 scss 한개파일에 몰아서 정리하기 (공부용이니까)
import './App.scss';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';


import ProductList_with_api from './fetchData/ProductList_with_api';
import ProductList_without_api from './fetchData/ProductList_without_api';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './pages/Products';
import Product from './pages/Product';
import Home from './pages/Home';
import App2 from './components/Filter/App2';



// 🍉Layout
const Layout = () => {
  return (
    <div className="app">
      <Navbar />

      {/* 🍉children👉 <Outlet/> */}
      <Outlet />
      <Footer />
      <App2/>
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
        element: <App2/>,
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



