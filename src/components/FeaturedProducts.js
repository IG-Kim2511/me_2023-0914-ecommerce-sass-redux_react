import React from 'react'
import products from '../data'
import { Link } from 'react-router-dom'


const FeaturedProducts = ({type}) => {
    console.log(products)

  return (
    <div className="featuredProducts">
        <section className='top'>
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci aliquid dolorum veniam modi architecto culpa, impedit, quas maiores vitae asperiores distinctio tenetur minus ipsa ducimus eum quae itaque porro?</p>
        </section>

        <section className='bottom'>
            {/* {products[0].id} */}

            {products.map((item)=>(
                // 🦄link to product.js 
                <Link className='link' to={`/product/${item.id}`}>
                    <div className="card">
                        {/* 🦄q: hover하면 이미지가 바뀜.
                        컨테이너안에 이미지가 2개있어야 함 */}
                        <section className='image'>
                            <img src=''/>
                        </section>
                        <h2>item.title</h2>
                        <section className='prices'>
                            <h3>old price</h3>
                            <h3>price</h3>
                        </section>
                    </div>            
                </Link>
            ))}
 
        </section>

    
    </div>
  )
}

export default FeaturedProducts