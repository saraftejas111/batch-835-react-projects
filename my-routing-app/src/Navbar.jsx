import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
      <nav>
        <Link to='/mobile'>Mobile</Link> {" | "}
        <Link to='/fashion'>Fashion</Link> {" | "}
        <Link to='/elect'>Electronics</Link> {" | "}
      </nav>
    </div>
  )
}

export default Navbar
