
import './App.css'
import AddEmployee from './components/AddEmployee'
import ShowAll from './components/ShowAll'

function App() {

  return (
    <>
      <center>
        <h1> Welcome to My CRUD App </h1>

        <ShowAll />
        <br />
        <AddEmployee />
      </center>
    </>
  )
}

export default App
