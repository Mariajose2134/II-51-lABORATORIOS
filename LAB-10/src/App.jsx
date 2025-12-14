import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import boy from './assets/avatar niño.jpg'
import adult from './assets/avatar adulto.png'
import './App.css'
import LikeButton from './LikeButton'

function App() {
  // Estado para el contador
  // Hook useState
  const [age, setAge] = useState(0)
  const [isAdult, setIsAdult] = useState(false)

  // Hook useEffect para actualizar isAdult cuando age cambia
  useEffect(() => {
    setIsAdult(age >= 18)
  }, [age])

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setAge((age) => age + 1)}>
          age is {age}
        </button>

        <LikeButton></LikeButton>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='avatars'>
        <img src={isAdult ? adult : boy} alt="avatar" />
      </div>
    </>
  )
}

export default App
