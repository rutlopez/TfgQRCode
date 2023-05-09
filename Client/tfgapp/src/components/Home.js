import React from 'react'
import Footer from './Footer';
import Header from './NavBar';
import Hero from './Hero';
import Features from './Features';
import ExamplesCards from './ExamplesCards';


const Home = () => {
  return (
    <div>
    <Header></Header>
    <Hero></Hero>
    <Features></Features>
    <ExamplesCards></ExamplesCards>
    <Footer></Footer>
  </div>
  )
}

export default Home