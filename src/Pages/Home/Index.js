import React from 'react'
import NavBar from '../../components/NavBar'
import HeroSection from './HomeComponents/HeroSection'
import OurExpertise from './HomeComponents/OurExpertise'
import Aboutus from './HomeComponents/Aboutus'
import Portfolio from './HomeComponents/Portfolio'

const Index = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <OurExpertise/>
      <Portfolio/>
      <Aboutus/>
    </>
  )
}

export default Index