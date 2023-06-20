import React from 'react'
import { Slider } from './../../components/Slider/Slider';
import { FeaturedProducts } from './../../components/FeaturedProducts/FeaturedProducts';
import { Categories } from './../../components/Categories/Categories';
import { ContactUs } from '../../components/ContactUs/ContactUs';


export const Home = () => {
  return (
    <>
    <div className="home">
      <Slider/>
      <FeaturedProducts type="featured"/> 
      <Categories/>
      <FeaturedProducts type="trending"/> 
      <ContactUs/>
    </div>
    </>
  )
}
