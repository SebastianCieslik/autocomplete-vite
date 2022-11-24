import { useState } from 'react'
import './App.css'
import AutoComplete from './AutoComplete.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      Vite Project
      <AutoComplete/>
    </div>
  )
}

export default App
