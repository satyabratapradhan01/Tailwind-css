import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Component/Header'
import { Color } from './Component/Color'
import MarginAndPading from './Component/MargingAndPading'
import Width from './Component/Width'
import Height from './Component/height'
import Size from './Component/Size'
import Positions from './Component/Positions'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Positions />
    </>
  )
}

export default App
