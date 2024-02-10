import React from 'react'
import NavBar from '../../components/NavBar'
import HeroSection from './HomeComponents/HeroSection'
import OurExpertise from './HomeComponents/OurExpertise'
import Aboutus from './HomeComponents/Aboutus'
import Portfolio from './HomeComponents/Portfolio'
import Testimonials from './HomeComponents/Testimonials'
import ContactUs from './HomeComponents/ContactUs'
import Footer from '../../components/Footer'
import Arrows from '../../components/Arrows'

const Index = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <OurExpertise/>
      <Portfolio/>
      <Aboutus/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default Index