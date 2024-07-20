import React from 'react'
import { NavLink } from 'react-router-dom'
import Featuredcatagories from './Featuredcatagories'
import Featuredproducts from './Featuredproducts'
import './Homepage.css'
import CarasolSlider from './CarasolSlider'
const Home = () => {
  return (
    <>
 <Featuredcatagories/>
 <Featuredproducts/>
 <CarasolSlider/>
    </>

  
  )
}

export default Home