import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  //   const location = useLocation();

    const navigate = useNavigate() ;

    const n = localStorage.getItem('name')

   const handleLogout = () => {

    localStorage.removeItem('name')

    navigate('/loginpage')
            
   }

  return (
    <div>
      <h2>Login Success.. Welcome to Dashboard.... {n}</h2>


      <nav>
        <Link to='/profile'>Profile</Link> <br /><br />
        <Link to='/setting'>Setting</Link><br /><br />
      </nav>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard
