import React from 'react'

const Footer = () => {
  return (
    <div id='footer'>
      <section className='top'>
        <div className="item">
          <h1>Categories</h1>
          <span>Groceries</span>
          <span>Groceries</span>
          <span>Groceries</span>
          <span>Groceries</span>
       
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>FAQ</span>
          <span>FAQ</span>
          <span>FAQ</span>        
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>     
      </section>
      <section className='bottom'>
        <div className="left">
          Store0914 with redux, dummydata   
        </div>
        <div className="right">
         {/* 🦄public 폴더안 img가져옴 , src="/img/~~~ " */}
          {/* <img src='/img/payment.png'/> */}
        </div>
      </section>
    </div>
  )
}

export default Footer