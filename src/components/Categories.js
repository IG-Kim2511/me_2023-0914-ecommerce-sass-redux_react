import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div id="categories">
      <h1>Categories</h1>
      <section class="parent">
        <div class="div1">
         <img src="https://i.imgur.com/ngBbEN5.jpg" alt=""/>
          {/* 🍀/products/~~~ */}
            <Link className="link" to="/products/groceries"><button className="myButton">
            groceries</button></Link>
     
        </div>
        <div class="div2">
          <img src="https://i.imgur.com/jgcx4vg.jpg" alt=""/>
          <Link className="link" to="/products/fragrances"><button className="myButton">fragrances</button></Link>
        
        </div>
        <div class="div3">
          <img src="https://i.imgur.com/RdhpLtf.jpg" alt=""/>
          <Link className="link" to="/products/home-decoration"><button className="myButton">home-decoration</button></Link>
          
        </div>
        <div class="div4">
          <img src="https://i.imgur.com/qEiQtfA.jpg" alt=""/>
          <Link className="link" to="/products/laptops"><button className="myButton">laptops</button></Link>          
        </div>
        <div class="div5">
          <img src="https://i.imgur.com/sVex7iS.jpg" alt=""/>
          <Link className="link" to="/products/skincare"><button className="myButton">skincare</button></Link>
        </div>
        <div class="div6">
          <img src="https://i.imgur.com/12aNmCU.jpg" alt=""/>
          <Link className="link" to="/products/smartphones"><button className="myButton">smartphones</button></Link>      
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