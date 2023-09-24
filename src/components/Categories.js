import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div id="categories">
      <h1>Categories</h1>
      <section class="parent">
        <div class="div1">
         <img src="/img/groceries.jpg" alt=""/>
          <button>
          {/* 🍀/products/~~~ */}
            <Link className="link" to="/products/groceries">groceries</Link>
          </button>
        </div>
        <div class="div2">
          <img src="/img/fragrances.jpg" alt=""/>
          <button>          
            <Link className="link" to="/products/fragrances">fragrances</Link>
          </button>
        </div>
        <div class="div3">
          <img src="/img/home-decoration.jpg" alt=""/>
          <button>          
            <Link className="link" to="/products/home-decoration">home-decoration</Link>
          </button>
        </div>
        <div class="div4">
          <img src="/img/laptops.jpg" alt=""/>
          <button>          
            <Link className="link" to="/products/laptops">laptops</Link>
          </button>
        </div>
        <div class="div5">
          <img src="/img/skincare.jpg" alt=""/>
          <button>          
            <Link className="link" to="/products/skincare">skincare</Link>
          </button>
        </div>
        <div class="div6">
          <img src="/img/smartphones.jpg" alt=""/>
          <button>          
            <Link className="link" to="/products/smartphones">smartphones</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Categories;



    // {/* 🦄flex로 grid처럼 만들기 (grid x) */}

    // {/* 👉css
    //   .cate2{display: flex;}
    // */}
    //   {/* 
    //     <main className="cate2">
    //       <section className="col">
    //         <div className="row">1</div>
    //         <div className="row">2</div>
    //       </section>
    //       <section className="col">
    //         <div className="row">3</div>
    //       </section>
    //       <section className="col col-l">
    //         <div className="row">
    //           <section className="col">
    //             <div className="row">4</div>
    //           </section>
    //           <section className="col">
    //             <div className="row">5</div>
    //           </section>
    //         </div>
    //         <div className="row">6</div>
    //       </section>
    //     </main> 
    //    */}