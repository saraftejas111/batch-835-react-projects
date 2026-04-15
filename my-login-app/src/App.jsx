
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard'
import RegisterNewUser from './RegisterNewUser'
import ProtectedRoute from './ProtectedRoute'

function App() {

  return (
    <>
      <center>



        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='register' element={<RegisterNewUser />} />


         {/* 🔒 Protected group */}
        <Route element={<ProtectedRoute />}>
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        
        </Routes>

      </center>
    </>
  )
}

export default App
