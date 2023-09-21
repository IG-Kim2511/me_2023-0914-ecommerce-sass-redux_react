import React from 'react'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>

    </div>
  )
}

export default Home



// <Slider/>
// {/* 🦄같은 components props만 다르게해서 여러번 rendering */}
// <FeaturedProducts type="featured"/>
// <Categories/>
// {/* 🦄같은 components props만 다르게해서 여러번 rendering */}
// <FeaturedProducts type="trending"/>
// <Contact/>