import React from 'react';
import { useSearchContext } from '../../context/SearchContext'; // Import the useSearchContext hook
import { Link } from 'react-router-dom';

const Navbar2 = () => {


  return (
    <div className="navbar">
   
    {/* Other navbar elements */}
    <div>hi</div>
    














    <section className="nav_wrap">
    <div className="item">
     { <Link className='link' to="/">Store0914</Link>}                    
    </div> 
    <div className="item">
      { <Link className='link none' to="/all">All Items</Link>}                    
    </div> 
    







    {/* 👉useNavigate */}
    <select className='item none' >
        <option value="">Select a category</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skincare</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home Decoration</option>
    </select>        
  
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

      
       
    </div>
           
</section>

    
    </div>
  );
};

export default Navbar2;
