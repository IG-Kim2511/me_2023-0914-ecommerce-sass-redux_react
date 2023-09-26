import React, { useState, useEffect } from "react";
import "./Navbar2.scss";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar2 = () => {

    // 🍀responsive nav bar
  const [click, setClicked] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const handleClick = () => {
    setClicked(!click);
  };

  const handleCloseMobileMenu = () => {
    setShowNav(false);
  };

//   useEffect(() => {
//     document.addEventListener("scroll", () => {
//       if (window.scrollY > 100) {
//         setShowNav(true);
//       } else {
//         setShowNav(false);
//       }
//     });
//   }, []);
// ----end---

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

  return (
    <nav id="Navbar2">     
        {/* 🍉showNav? */}
        <main className={showNav ? "navbar-container" : "navbar-container active"}>
            <div className="item">
                { <Link className='link' to="/">Store0914</Link>}                    
            </div> 

          {/* burger menu , responsive */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? <CloseIcon/> : <MenuIcon/>}
          </div>

          <div className="nav-link-items" onClick={handleCloseMobileMenu}>
          { <Link className='link' to="/all" >All Items</Link>}                    
          </div> 
          <form className={click ? "nav-menu active" : "nav-menu"}>              
            {/* 👉useNavigate */}
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
          <div className="item">
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
        </main>    
    </nav>
  );
};

export default Navbar2;
