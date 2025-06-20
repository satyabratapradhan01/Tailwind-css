import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Component/Header'
import { Color } from './Component/Color'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Color />
    </>
  )
}

export default App
