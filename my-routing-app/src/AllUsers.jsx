import React from 'react'
import { Link } from 'react-router-dom'

const AllUsers = () => {
  return (
    <div>
      
      <nav>
        <br /><br />
        <Link to='user/101'>Go to User 101</Link><br /><br />
        <Link to='user/102'>Go to User 102</Link><br /><br />
        <Link to='user/103'>Go to User 103</Link><br /><br />
        <Link to='user/104'>Go to User 104</Link><br /><br />
      </nav>
    </div>
  )
}

export default AllUsers
