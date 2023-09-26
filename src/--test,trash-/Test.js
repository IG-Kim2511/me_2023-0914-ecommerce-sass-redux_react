import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Use -1 to navigate back to the previous page
  };

  // ... (other code)

  return (
    <div id="navbar">
      <div className="wrapper">
        <section className="left">
          <div className="item">
            <Link className="link" to="/">
              Store0914
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/all">
              All Items
            </Link>
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

        <section className="right">
          <div className="item">
            <button onClick={handleGoBack}>Go Back</button>
          </div>
          <div className="icons">
            {/* ... (other icons and links) */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
