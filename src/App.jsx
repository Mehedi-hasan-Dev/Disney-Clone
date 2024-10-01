import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovie from './components/GenreMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" ">
       <Navbar/>
       <Slider/>
       <ProductionHouse/>
       <GenreMovie/>
      </div>
    </>
  )
}

export default App
