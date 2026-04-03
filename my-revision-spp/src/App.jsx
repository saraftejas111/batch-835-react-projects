
import { useState } from 'react'
import './App.css'
import ShowAll from './components/ShowAll'

function App() {

  const handleClick = () => {
    console.log("button clicked...")
  }

  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")


  const handleData = (e) => {

    console.log(username)
    console.log(password)

  }

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(username)
    console.log(password)
  }
  return (
    <>
      <center>
        <h1>Welcome to My Revision App</h1>
        <button onClick={handleClick}>Click Me</button>

        {/* how to accept the data frim user */}

        <br /><br />
        <form onSubmit={handleSubmit}>


          enter username : <input type="text" onChange={(e) => setUsername(e.target.value)} /> <br /><br />
          enter password : <input type="text" onChange={(e) => setPassword(e.target.value)} /> <br /><br />

          <button type='submit'>Send Data</button>
        </form>

        <ShowAll />
      </center>
    </>
  )
}

export default App
