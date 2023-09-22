import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Favorite } from '@mui/icons-material';


const Navbar = () => {
      // 👉0255
    //   const [open,setOpen] = useState(false)
    //   const products = useSelector((state) => state.cart.products);

    const [selectedCategory, setSelectedCategory] = useState(''); // State to track the selected category

    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value); // Update the selected category when the dropdown value changes
    };


  return (
    <div id='navbar'>
        <div className="wrapper">
            <section className="left">
                <div className="item">
                    {/* 🦄public 폴더안 img가져옴 , src="/img/~~~ " */}
                    <img src='/img/en.png'/>                    
                </div>
                <div className="item">
                { <Link className='link' to="/">Store</Link>}                    
                </div> 

               {/*  <div className="item">
                    <Link className ="link" to="/products/1">smartphones</Link>
                </div>
                <div className="item">
                    <Link className ="link" to="/products/2">laptops</Link>
                </div>
                <div className="item">
                    <Link className ="link" to="/products/3">fragrances</Link>
                </div>
                <div className="item">
                    <Link className ="link" to="/products/3">skincare</Link>
                </div>
                <div className="item">
                    <Link className ="link" to="/products/3">groceries</Link>
                </div>
                <div className="item">
                    <Link className ="link" to="/products/3">home-decoration</Link>
                </div> */}


                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Select a category</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="skincare">Skincare</option>
                    <option value="groceries">Groceries</option>
                    <option value="home-decoration">Home Decoration</option>
                </select>

                {/* Display the selected category as a link */}
                {selectedCategory && (
                    <div className="item">
                        <Link className="link" to={`/products/${selectedCategory}`}>
                            {selectedCategory}
                        </Link>
                    </div>
                )}
               
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
                    <div className="cartIcon">                    
                        <ShoppingCartIcon/>
                        <span>0</span>
                    </div>
                </div>
            </section>
        
        </div>
        {/* 🦄0255 open true일때  <Cart/> 보여줌 */}
        {/* {open && <Cart/>} */}
        
    </div>
    
  )
}

export default Navbar