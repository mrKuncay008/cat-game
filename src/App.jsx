import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cat from './main/Cat'
import Background from './main/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Background />
      <Cat />
    </>
  )
}

export default App
