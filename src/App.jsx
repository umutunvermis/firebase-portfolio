import { useState } from 'react'
import reactLogo from './assets/react.svg'
import dogeJpg from '/doge.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={dogeJpg} className="logo" alt="Doge img" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Umut Ünvermiş</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Welcome to my home page! This is a simple React app using Vite.
        </p>
      </div>
    </>
  )
}

export default App
