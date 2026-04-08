
import './App.css'
import Electronics from './Electronics'
import Fashion from './Fashion'
import Mobiles from './Mobiles'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'

function App() {

  return (
    <>
      <center>
        <h1>Welcome to my routing app...</h1>

        <Navbar />
        <Routes>

          <Route path='/mobile' element={<Mobiles />} />
          <Route path='/fashion' element={<Fashion />} />
          <Route path='/elect' element={<Electronics />} />


        </Routes>


      </center>
    </>
  )
}

export default App
