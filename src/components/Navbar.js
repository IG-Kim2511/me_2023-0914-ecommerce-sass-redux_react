import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                <Link className='link' to="/">Store0914 with redux, SASS</Link>
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
            </section>
        
        </div>
        
    </div>
    
  )
}

export default Navbar