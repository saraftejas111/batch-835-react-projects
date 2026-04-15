import React, { useState } from 'react'
import { api } from './apiServices';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    

    const [user, setUser] = useState({ email: "", password: "" })

    const navigate = useNavigate() ; 

    const handleChange = (e) => {

        const { name, value } = e.target;

        setUser({ ...user, [name]: value })

    }

    const handleLogin = async () => {
        console.log(user)

       const success = await api.post('login', user); 

       console.log("success : " , success)

       if(success.data !== '') {
             navigate('/dashboard')
             localStorage.setItem('user' , JSON.stringify(success.data))
       }else{
        alert("Invalid Credentials")
       }
    }
    return (
        <div>
             <h1>Welcome to My Login App</h1>
            email : <input type="text" name='email' value={user.email} onChange={handleChange} /> <br /><br />
            password : <input type="text" name='password' value={user.password} onChange={handleChange} /> <br /><br />

            <button onClick={handleLogin}>Login</button>

            <nav>
                <Link to='register'>Register User</Link>
            </nav>
        </div>
    )
}

export default Login
