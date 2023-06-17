/**
 * @fileoverview Página Home

 * @version 1.0
 * @author Rut Yela
 * @copyright rut.yela.lopez@gmail.com
 */
import React from 'react'
import Footer from './Footer';
import Header from './NavBar';
import Hero from './Hero';
import Navbar2 from './Navbar2';
import Features from './Features';
import StepByStep from './StepByStep';
import ExamplesCards from './ExamplesCards';
import Promotion from './Promotion';
import Faq from './Faq';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar2></Navbar2>
      <Hero></Hero>
      <Features></Features>
      <StepByStep></StepByStep>
      <ExamplesCards></ExamplesCards>
      <Faq></Faq>
      <Promotion></Promotion>
      <Footer></Footer>
    </div>
  )
}

export default Home