import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [username, setUsernamae] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleLogin = () => {


      //  navigate('/dash' , {state : {name : username}})

       navigate('/dash' )

       localStorage.setItem('name' , username)

    }

    return (
        <div>
            <h2>Login Page</h2>

            <input type="text" placeholder='enter username or rmail' onChange={(e) => setUsernamae(e.target.value)} /> <br /><br />
            <input type="password" placeholder='enter password' onChange={(e) => setPassword(e.target.value)} /> <br /><br />

            <button onClick={handleLogin}>Log In</button>





        </div>
    )
}

export default Login
