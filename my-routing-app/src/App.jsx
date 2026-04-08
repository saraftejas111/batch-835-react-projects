
import './App.css'
import Electronics from './Electronics'
import Fashion from './Fashion'
import Mobiles from './Mobiles'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Homepage from './Homepage'
import AllUsers from './AllUsers'
import UserDetails from './UserDetails'

function App() {

  return (
    <>
      <center>
        <Navbar />
        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='/mobile' element={<Mobiles />} />
          <Route path='/fashion' element={<Fashion />} />
          <Route path='/elect' element={<Electronics />} />
          <Route path='/allusers' element={<AllUsers />} />
          <Route path='allusers/user/:id' element={<UserDetails />} />

        

        </Routes>


      </center>
    </>
  )
}

export default App
