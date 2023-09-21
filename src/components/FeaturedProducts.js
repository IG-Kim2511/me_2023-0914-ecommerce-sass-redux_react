import React from 'react'
import products from '../data'


const FeaturedProducts = ({type}) => {
  return (
    <div className="featuredProducts">
        <section className='top'>
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci aliquid dolorum veniam modi architecto culpa, impedit, quas maiores vitae asperiores distinctio tenetur minus ipsa ducimus eum quae itaque porro?</p>
        </section>
        <section className='bottom'>

        {/* {products[0].id} */}

        </section>

    
    </div>
  )
}

export default FeaturedProducts