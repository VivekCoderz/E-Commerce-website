import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Home/Header'
import HeroSection from './components/Home/HeroSection'
import FeaturedProducts from './components/Home/FeaturedProducts'
import Footer from './components/Home/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <HeroSection/>
    <FeaturedProducts/>
    <Footer/>
    </>
  )
}

export default App
