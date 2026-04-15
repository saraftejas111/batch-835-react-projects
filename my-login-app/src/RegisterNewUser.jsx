import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from './apiServices';

const RegisterNewUser = () => {

    const [newUser, setNewUser] = useState({ fullName: "", email: "", password: "" })

    const nav = useNavigate();
    const handleChange = (e) => {

        let { name, value } = e.target;

        setNewUser({ ...newUser, [name]: value })
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        api.post('add-user', newUser).then((res) => {
            console.log("success :", res.data)
            nav('/')
        }).catch((err) => console.log('error', err))
    }
    return (
        <div>
            <h2>Register New User</h2>

            <form onSubmit={handleSubmit}>

                Full Name : <input type="text" name='fullName' value={newUser.fullName} onChange={handleChange} /> <br /><br />
                email: <input type="text" name='email' value={newUser.email} onChange={handleChange} /> <br /><br />
                Password  : <input type="text" name='password' value={newUser.password} onChange={handleChange} /> <br /><br />

                <button type='submit'>Register User</button>
            </form>

        </div>
    )
}

export default RegisterNewUser
