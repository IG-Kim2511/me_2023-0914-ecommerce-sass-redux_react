import React from 'react'
import Slider from '../components/Slider'
import SliderMUI from '../components/SliderMUI'
import CategoryProducts from '../components/CategoryProducts'
import Categories from '../components/Categories'
import HiddenSearchBar from '../--test,trash-/HiddenSearchBar'


const Home = () => {
  return (
    <div id='Home'>
      <Slider/> 
      
      
      <HiddenSearchBar/>
                
      <Categories/>  
      
      
    </div>
  )
}

export default Home


