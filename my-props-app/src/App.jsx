
import { useEffect, useState } from 'react'
import './App.css'
import Effect from './Effect'
import Wish from './Wish';
import Add from './Add';
import Substract from './Substract';
import Multiply from './Multiply';
import Division from './Division';

function App() {

  let name = "Tejas";

  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(0)


  const handleNum1 = (e) => {

    setNum1(Number (e.target.value))
  }
  const handleNum2 = (e) => {
    setNum2(Number (e.target.value))
  }
  return (
    <>
      <center>
        <h1>Welcome to my Props App...</h1>

        <Effect /> <br />

        <Wish nm={name} />

        {/* raj is having two values on which he wants to perform Aritmetic opt*/}

        enter num 1 : <input type="text" onChange={handleNum1} /> <br /><br />

        enter num 2 : <input type="text" onChange={handleNum2} /> <br /><br />

        <Add n1={num1} n2={num2} />
        <Substract n1={num1} n2={num2} />
        <Multiply n1={num1} n2={num2} />
        <Division n1={num1} n2={num2} />

      </center>
    </>
  )
}

export default App
