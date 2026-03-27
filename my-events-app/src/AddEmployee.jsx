import React, { useState } from 'react'

const AddEmployee = () => {

    let [credentials, setCredentials] = useState({ username: "", password: "" })

    const handleUsername = (u) => {

        setCredentials({ ...credentials, username: u.target.value })
    }

    const handlePassword = (p) => {

        setCredentials({ ...credentials, password: p.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials)
    }

    const handleAllInputByName = (e) => {

        let { name, value } = e.target;

        setCredentials({ ...credentials, [name]: value })
    }
    return (
        <div>

            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>
                <h3>username : <input type="text" name='username' onChange={handleAllInputByName} /></h3>
                <h3>password : <input type="text" name='password' onChange={handleAllInputByName} /></h3>

                <button type='submit'>Send Data</button>
            </form>
        </div>
    )
}

export default AddEmployee
