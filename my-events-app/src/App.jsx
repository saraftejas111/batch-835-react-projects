
import { useState } from 'react'
import './App.css'
import AddEmployee from './AddEmployee'

function App() {

  let [name, setName] = useState("")

  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(0)



  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)

    setName(e.target.value)

  }


  return (
    <>
      <center>

        Enter your name : <input type="text" name='username' onChange={handleChange} /> <br />
        <h1>Welcome to My Events App...{name}</h1>

        <button onClick={() => console.log("button clicked..")}>Click Me..</button> <br /><br />

        <AddEmployee/> <br /><br />

        enter num1 : <input type="text" onChange={(e) => setNum1(Number(e.target.value))} /> <br /><br />
        enter num2 : <input type="text" onChange={(e) => setNum2(Number(e.target.value))} /> <br /><br />

        <h2>Sum = {num1+num2}</h2>
      </center>
    </>
  )
}

export default App
