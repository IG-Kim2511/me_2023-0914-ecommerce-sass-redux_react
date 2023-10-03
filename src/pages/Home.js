import React from 'react'
import Slider from '../components/Slider'
import SliderMUI from '../components/SliderMUI'
import CategoryProducts from '../components/CategoryProducts'
import Categories from '../components/Categories'
import MyImageZoom from '../--test,trash-/MyImageZoom'


const Home = () => {
  return (
    <div id='Home'>

    <MyImageZoom/>

      <Slider/> 
      {/* <SliderMUI/> */}
      <Categories/>  
      
      
    </div>
  )
}

export default Home


