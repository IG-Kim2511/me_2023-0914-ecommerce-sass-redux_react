import React from 'react'
import Slider from '../components/Slider'
import SliderMUI from '../components/SliderMUI'
import CategoryProducts from '../components/CategoryProducts'
import Categories from '../components/Categories'
import MagnifyingGlass from '../--test,trash-/MagnifyingGlass'
import products from '../data'

console.log(products)
console.log(products[0].images[0])
const Home = () => {
  return (
    <div id='Home'>
    <MagnifyingGlass src={products[0].images[0]} />
      <Slider/> 
      {/* <SliderMUI/> */}
      <Categories/>  
      
      
    </div>
  )
}

export default Home


