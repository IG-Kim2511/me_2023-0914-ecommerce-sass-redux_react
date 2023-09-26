import React, { useState, useEffect } from "react";
import "./Navbar2.scss";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar2 = () => {
  const [click, setClicked] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setClicked(!click);
  };

  const handleCloseMobileMenu = () => {
    setShowNav(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);

  return (
    <nav className={showNav ? "navbar-container" : "navbar-container active"}>
      <a href="/" className="navbar-logo">
        "Logo"
        <p>React Navbar</p>
      </a>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <CloseIcon/> : <MenuIcon/>}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/" className="nav-link">
            Products
          </a>
        </li>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
