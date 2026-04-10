
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard'
import Navbar from './Navbar';
import { useState } from 'react';
import Profile from './Profile';
import Settings from './Settings';
import ProtectedRoute from './ProtectedRoute';

function App() {

  // let [u, setU] = useState("")
  return (
    <>
      <center>
        <h1>Welcome to navigate app</h1>

        <Navbar />

        <Routes>

          <Route path='/loginpage' element={<Login />} />

               <Route element={<ProtectedRoute/>}>
               
               <Route path="/dash" element = {<Dashboard/>}/>
               <Route path="/profile" element = {<Profile/>}/>
               <Route path="/setting" element = {<Settings/>}/>
               
               </Route>              

        </Routes>

      </center>
    </>
  )
}

export default App
