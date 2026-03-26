import { useState } from 'react';
import './App.css'
import CounterApp from './CounterApp';

function App() {

  let name = "Tejas"
  let count = 0;
  let [ucount, setUcount] = useState(0)
  const handleClick = () => {
    count++;
    setUcount(ucount + 1)
    console.log("count = " + count + " --- u count = " + ucount)

  }

  return (
    <>
      <center>
        <h1>Welcome to Event State Intro... Mr. {name}</h1>

        <CounterApp/>
=======================================================================================
        {/* 1st event onCLick .. attributes in react follows thhe camelCase */}
        <button onClick={handleClick}>Click Me</button>
        <h2>Normal Var Count = {count}</h2>
        <h2>useState Var Count = {ucount}</h2>
      </center>
    </>
  )
}

export default App
