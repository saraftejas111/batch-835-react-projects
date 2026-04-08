import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
      <nav>
        <Link to='/'>Home</Link> {" | "}
        <Link to='/mobile'>Mobile</Link> {" | "}
        <Link to='/fashion'>Fashion</Link> {" | "}
        <Link to='/elect'>Electronics</Link> {" | "}
        <Link to='/allusers'>All Users</Link> {" | "}
      </nav>
    </div>
  )
}

export default Navbar
