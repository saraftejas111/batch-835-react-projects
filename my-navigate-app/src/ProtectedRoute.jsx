import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const nm = localStorage.getItem('name')

    if (nm == null) {
        return <Navigate to='/loginpage'></Navigate>
    }

    return <Outlet/>;

}

export default ProtectedRoute
