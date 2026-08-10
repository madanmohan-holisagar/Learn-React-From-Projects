import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count,setCount]=useState(0)
  const addValue=()=>{
      if(count<20)
      {
        setCount(count+1)
      }
    }
  const removeValue=()=>{
        if(count>0)
        {
        setCount(count-1)
        }
  }
  const resetValue=()=>{
    setCount(0)
  }

  return (
    <>
      <h1>THIS IS MY FIRST PROJECT ON REACT</h1>
      <h2>Counter Value {count}</h2>
      <div className="buttons">
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}>Decrease</button>
      <button onClick={resetValue}>Reset</button>
      </div>
    </>
  )
}

export default App
