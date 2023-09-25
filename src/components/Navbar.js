/* 
 🚀make select tag with it
when i click option tap. address is not move to  the page. 
I wanna move page as soon as i click option
*/

import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Favorite } from '@mui/icons-material';
import { useSelector } from 'react-redux';




const Navbar = () => {
      // 👉0255
    //   const [open,setOpen] = useState(false)
    //   const products = useSelector((state) => state.cart.products);

    const [selectedCategory, setSelectedCategory] = useState(''); // State to track the selected category

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        if (selectedCategory) {
          window.location.href = `/products/${selectedCategory}`;
        }
      };

    //   🍉redux    
    const cartItems = useSelector((state) => state.cart.cartItems);
    

  return (
    <div id='navbar'>
        <div className="wrapper">
            <section className="left">        
                <div className="item">
                 { <Link className='link' to="/">Store0914</Link>}                    
                </div> 
                <div className="item">
                  { <Link className='link' to="/all">All Items</Link>}                    
                </div> 
                
                <select onChange={handleCategoryChange}>
                    <option value="">Select a category</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                    <option value="groceries">Groceries</option>
                    <option value="home-decoration">Home Decoration</option>
                </select>        
            </section>

            {/*   
            <section className="center">
                { <Link className='link' to="/">Store</Link>}
                </section> 
            */}

            <section className="right">
                <div className="item">
                    <Link className ="link" to="/">Home</Link>
                </div>       
                <div className="icons">
                    <SearchIcon/>
                    <PersonIcon/>
                    <FavoriteIcon/>

                     {/* 👉0255 icon click*/}
                     {/*   <div className="cartIcon"  onClick={()=>setOpen(!open)}>
                        <ShoppingCartOutlinedIcon/>
                        <span>{products.length}</span>
                        </div> */}

                    <Link className ="link" to="/cart">              
                        <div className="cartIcon">                      
                        <ShoppingCartIcon/>       
                            <span>{cartItems.length}</span>
                        </div>
                    </Link>    
                </div>
            </section>
        
        </div>
        {/* 🦄0255 open true일때  <Cart/> 보여줌 */}
        {/* {open && <Cart/>} */}
        
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
