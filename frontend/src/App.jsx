import React from 'react'
import { useState } from 'react'
import { Home } from 'lucide-react'
import Signup from './components/auth/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Signup/>
    <Home/>
    </>
  )
}

export default App
