import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {

    //  const location = useLocation() ; 

    const nm = localStorage.getItem('name')

    return (
        <div>
            <h3>profile ... {nm}</h3>
        </div>
    )
}

export default Profile
