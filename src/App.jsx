import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss";

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 class='text-9xl font-bold bg-purple-500 text-orange p-4 rounded-lg'>Aasha</h1>
  )
}

export default App;
