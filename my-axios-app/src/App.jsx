
import { useState } from 'react'
import './App.css'
import AddEmployee from './components/AddEmployee'
import ShowAll from './components/ShowAll'

function App() {

  let [add , setAdd] = useState(0)

  let [edit , setEdit] = useState({})

  return (
    <>
      <center>
        <h1> Welcome to My CRUD App </h1>

        <ShowAll refresh={add} handleEdit={(e) => setEdit(e)}/>
        <br />
        <AddEmployee  setRef={(v) => setAdd(add+v)} acceptEmp={edit}/>
      </center>
    </>
  )
}

export default App
