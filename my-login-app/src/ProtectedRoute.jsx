import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

   const user = JSON.parse(localStorage.getItem("user"))

   console.log("ProtectedRoute", user)
   if(!user ){
       return <Navigate to='/' />
   }

  return <Outlet/>
}

export default ProtectedRoute
