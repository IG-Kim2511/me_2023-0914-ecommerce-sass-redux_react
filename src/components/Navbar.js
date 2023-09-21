import React from 'react'
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

  return (
    <div className='navbar'>
        <div className="wrapper">
            <section className="left">
                <div className="item">
                    {/* 🦄public 폴더안 img가져옴 , src="/img/~~~ "*/}
                    <img src='/img/en.png'/>
                    <ExpandMoreIcon/>
                </div>
                <div className="item">
                    <span>USD</span>
                    <ExpandMoreIcon/>
                </div>
                <div className="item">
                    <Link className ="link" to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className ="link" to="/products/2">Men</Link>
                </div>
                <div className="item">
                    <Link className ="link" to="/products/3">Children</Link>
                </div>
            </section>
            <section className="center">
               { <Link className='link' to="/">Store0914</Link>}
            </section>
            <section className="right">
                <div className="item">
                    <Link className ="link" to="/">Homepage</Link>
                </div>
                <div className="item">
                    <Link className ="link" to="/">About</Link>
                </div>
                <div className="item">
                    <Link className ="link" to="/">Contact</Link>
                </div>
                <div className="item">
                    <Link className ="link" to="/">Stores</Link>
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