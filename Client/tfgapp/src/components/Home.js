import React from 'react'
import Footer from './Footer';
import Header from './NavBar';
import Hero from './Hero';
import Features from './Features';
import StepByStep from './StepByStep';
import ExamplesCards from './ExamplesCards';
import Promotion from './Promotion';
import Faq from './Faq';



const Home = () => {
  return (
    <div>
      <Header></Header>
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