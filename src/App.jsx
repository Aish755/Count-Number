import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(0)

  //let counter=1

  const addValue=()=>{
      
      counter=counter+1;
     setCounter(counter)
  };

  const reduceValue=()=>{
    if(counter<1){
      setCounter(-0)
    }
    else{
    setCounter(counter-1)
    }
  }

  return (
    <>
     <h1>The Counter App</h1>
     <h2>Counter value:{counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br/>
      <br />
     <button onClick={reduceValue}>decreased value</button>
    </>
  )
}

export default App
