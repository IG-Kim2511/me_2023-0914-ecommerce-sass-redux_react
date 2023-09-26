/* 
 🚀make select tag with it
when i click option tap. address is not move to  the page. 
I wanna move page as soon as i click option
*/

import React, { useState } from 'react'
import "./Navbar.scss"
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Favorite } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Navbar = () => {

  // 🍀useNavigate (= useHistory new version)
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      navigate(`/products/${selectedCategory}`); // Use navigate to navigate
    }
  };
  
  const [selectedCategory, setSelectedCategory] = useState(''); 
  // --end--

  //   🍉redux    
  const cartItems = useSelector((state) => state.cart.cartItems);  

  // 🍀responsive nav bar
  const [click, setClicked] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const handleClick = () => {
    setClicked(!click);
  };

  const handleCloseMobileMenu = () => {
    setShowNav(false);
  };
// ----

  return (
    <div id='navbar'>
        <div className="wrapper">
            <section className={`left`}>  
                <div className="item">
                 { <Link className='link' to="/">Store0914</Link>}                    
                </div> 
                <div className="item">
                  { <Link className='link close' to="/all">All Items</Link>}                    
                </div> 
                
                {/* 👉useNavigate */}
                <select className='item close' onChange={handleCategoryChange}>
                    <option value="">Select a category</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                    <option value="groceries">Groceries</option>
                    <option value="home-decoration">Home Decoration</option>
                </select>        
            </section>

           
            <section className="right">
                <div className="item close">
                    <Link className ="link none" to="/">Home</Link>
                </div>       
                <div className="icons item">                
                {/* 👉0255 icon click*/}
                {/*   
                    <SearchIcon/>
                    <PersonIcon/>
                    <FavoriteIcon/>
                    <div className="cartIcon"  onClick={()=>setOpen(!open)}>
                        <ShoppingCartOutlinedIcon/>
                        <span>{products.length}</span>
                    </div> 
                */}
                    <Link className ="link" to="/cart">              
                        <div className="cartIcon">                      
                        <ShoppingCartIcon/>       
                            <span>{cartItems.length}</span>
                        </div>
                    </Link>    
                </div>
                {/* 🦄burger menu , responsive */}
                <div className="menu-icon" onClick={handleClick}>
                   {click ? <CloseIcon/> : <MenuIcon/>}
               </div>
            </section>
        </div>
        {/*🦄responsive  */}    
        <form className={click ? "sideNav active" : "sideNav"}>     
            <div className="item">
               <Link className='link close' to="/all">All Items</Link>                 
            </div>          

            <select className='nav-link-items' onChange={handleCategoryChange}>
                <option value="">Select a category</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="fragrances">Fragrances</option>
                <option value="skincare">Skincare</option>
                <option value="groceries">Groceries</option>
                <option value="home-decoration">Home Decoration</option>
            </select>                   
         </form>
      
        
    </div>
    
  )
}

export default Navbar




        //    {/*  <div className="item">
        //             <Link className ="link" to="/products/1">smartphones</Link>
        //         </div>
        //         <div className="item">
        //             <Link className ="link" to="/products/2">laptops</Link>
        //         </div>
        //         <div className="item">
        //             <Link className ="link" to="/products/3">fragrances</Link>
        //         </div>
        //         <div className="item">
        //             <Link className ="link" to="/products/3">skincare</Link>
        //         </div>
        //         <div className="item">
        //             <Link className ="link" to="/products/3">groceries</Link>
        //         </div>
        //         <div className="item">
        //             <Link className ="link" to="/products/3">home-decoration</Link>
        //         </div> */}


        //  {/*
        //     <section className='burger-container'>
        //         <div className={`burger`} >
        //             <div className="bar"></div>
        //             <div className="bar"></div>
        //             <div className="bar"></div>
        //         </div>
        //     </section> 
        //     */}

        //     <section className={`burger-left`}>  
        //         <div className="item">
        //         { <Link className='link' to="/">Store0914</Link>}                    
        //         </div> 
        //         <div className="item">
        //         { <Link className='link' to="/all">All Items</Link>}                    
        //         </div> 
                
        //         {/* 👉useNavigate */}
        //         <select className='item' onChange={handleCategoryChange}>
        //             <option value="">Select a category</option>
        //             <option value="smartphones">Smartphones</option>
        //             <option value="laptops">Laptops</option>
        //             <option value="fragrances">Fragrances</option>
        //             <option value="skincare">Skincare</option>
        //             <option value="groceries">Groceries</option>
        //             <option value="home-decoration">Home Decoration</option>
        //         </select>        
        //     </section>

        //     {/*   
        //     <section className="center">
        //         { <Link className='link' to="/">Store</Link>}
        //         </section> 
        //     */}
