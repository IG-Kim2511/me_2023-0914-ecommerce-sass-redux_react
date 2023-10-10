import React from 'react'
import products from '../data'
import { Link } from 'react-router-dom'
import Card from './Card'


const CategoryProducts = ({category}) => {
    console.log(products)

    // 🦄filter category rendering
    const CategoryProducts = products.filter((product) => product.category === category);

  return (
    <div id="CategoryProducts">
        <section className='top'>
            <h1>{category} products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga adipisci aliquid dolorum veniam modi architecto culpa, impedit, quas maiores vitae asperiores distinctio tenetur minus ipsa ducimus eum quae itaque porro?</p>
        </section>

        <Card CardProducts={CategoryProducts}/>    
 
    </div>
  )
}

export default CategoryProducts

