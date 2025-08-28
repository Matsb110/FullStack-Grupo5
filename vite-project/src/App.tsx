import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mi primera pagina web</h1>
      <div className="card">
         <h1>¡Hola Desarrollo Web!</h1>
    <p>Este es mi primer laboratorio con HTML y CSS.</p>
      <button id="btnClick" onClick={updateCount}>Haz clic aquí</button>
      <p>Has hecho clic {count} veces</p>
        </div>
    </>
  )
}

export default App
