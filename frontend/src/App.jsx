import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Home/Header'
import HeroSection from './components/Home/HeroSection'
import FeaturedProducts from './components/Home/FeaturedProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <HeroSection/>
    <FeaturedProducts/>
    </>
  )
}

export default App
