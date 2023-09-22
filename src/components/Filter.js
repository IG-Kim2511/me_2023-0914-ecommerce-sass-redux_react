import React from 'react'
import products from '../data'

const Filter = () => {
  return (
    <div id='filter'>
        {/* input checkbox */}
        <section className='filterItem'>
            <h2>Product categories 6 type</h2>
            <div className="inputItem">
                <input type="checkbox" id='groceries'/>
                 {/* 🦄htmlFor */}
                <label htmlFor='groceries'>groceries</label>            
            </div>
        </section>

        {/* 🦄input type='range' */}
        <section className='filterItem'>
            <h2>filter by price</h2>
            <div className="inputItem">
                <span>0 $</span>    
                <input type="range" />
                <span>10.000 $</span>
            </div>
        </section>

        {/* input radio */}
        <section className='filterItem'>
            <h2>Sort by</h2>
            <div className="inputItem">
                <input type='radio'></input>
                <label>Price (Lowest first)</label>
            </div>
            <div className="inputItem">
                <input type='radio'></input>
                <label>Price (Highest first)</label>
            </div>
        </section>
   
       
    </div>
  )
}

export default Filter