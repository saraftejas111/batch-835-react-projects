import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

    const {id} = useParams() ; 
  return (
    <div>
      
      <h3>showing the details of user id = {id}</h3>
    </div>
  )
}
export default UserDetails
