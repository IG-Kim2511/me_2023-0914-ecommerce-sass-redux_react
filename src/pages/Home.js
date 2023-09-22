import React from 'react'
import Slider from '../components/Slider'
import SliderMUI from '../components/SliderMUI'
import FilteredProducts from '../components/FilteredProducts'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Slider/> 
      {/* <SliderMUI/> */}
      <Categories/>
      <FilteredProducts/>
      

    </div>
  )
}

export default Home



// <Slider/>
// {/* 🦄같은 components props만 다르게해서 여러번 rendering */}
// <FeaturedProducts type="featured"/>
// {/* 🦄같은 components props만 다르게해서 여러번 rendering */}
// <FeaturedProducts type="trending"/>
// <Categories/>
// <Contact/>