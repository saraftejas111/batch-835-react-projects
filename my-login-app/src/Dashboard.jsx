import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    const nav = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('user')
        nav('/')
        console.log('dasboard user after logout : ', user)
    }

    console.log('dasboard user : ', user)

    return (
        <div>
            <h2>Welcome to Dashboard {user?.fullName}</h2>

            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default Dashboard
