/* 
 🚀make select tag with it
when i click option tap. address is not move to  the page. 
I wanna move page as soon as i click option
*/

import React, { useContext, useState } from 'react'
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


import products from '../data';
import { SearchContext } from '../context/Context';






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

  // 🍉 redux    
  const cartItems = useSelector((state) => state.cart.cartItems);  

  // 🍉 context

  const {searchQuery,setSearchQuery,filteredProducts,handleKeyPress, handleInputChange} = useContext(SearchContext)


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
        <section className="nav_wrap">
                <div className="item">
                 { <Link className='link' to="/">Store0914</Link>}                    
                </div> 
                <div className="item">
                  { <Link className='link none' to="/all">All Items</Link>}                    
                </div> 
                
                {/* 👉useNavigate */}
                <select className='item none' onChange={handleCategoryChange}>
                    <option value="">Select a category</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                    <option value="groceries">Groceries</option>
                    <option value="home-decoration">Home Decoration</option>
                </select>        
         
                <div className="item none">
                    <Link className ="link " to="/">Home</Link>
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

                  
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleInputChange}
                  />
                  
                  
                    <Link className ="link" to="/cart">              
                        <div className="cartIcon">                      
                        <ShoppingCartIcon/>       
                            <span>{cartItems.length}</span>
                        </div>
                    </Link>    
                </div>
                {/* 🦄burger menu , responsive */}
                <div className="menu-icon" onClick={handleClick}>
                   {click ? <CloseIcon className='mui-icon'/> : <MenuIcon className='mui-icon'/>}
               </div>           
        </section>

        {/*🦄responsive  */}    
        <form className={click ? "sideNav active" : "sideNav"}>     
            {/* 복붙, reponsive side menu용으로 따로 코딩해둠 */}
            <Link className='link myButton' to="/all">All Items</Link>     

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


