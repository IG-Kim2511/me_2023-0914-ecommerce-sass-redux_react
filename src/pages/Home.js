import React from 'react'
import Slider from '../components/Slider'
import SliderMUI from '../components/SliderMUI'
import FilteredProducts from '../components/FilteredProducts'
import Categories from '../components/Categories'
import Filter from '../components/Filter'

const Home = () => {
  return (
    <div>
      <Slider/> 
      {/* <SliderMUI/> */}
      <Categories/>  
      <Filter/>
      
    </div>
  )
}

export default Home


