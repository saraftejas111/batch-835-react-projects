import React, { useState } from 'react'

const AddEmployee = ({ sendEmp }) => {

    let [ emp, setEmp ] = useState({id:"" ,  name: "", role: "", salary: "" })

    const handleChange = (e) => {

        let { name, value } = e.target;

        setEmp({ ...emp, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmp(emp);
        setEmp({ id : "" , name: "", role: "", salary: "" });
    }
    return (
        <div>

            <h2>Add Employee</h2>

            <form onSubmit={handleSubmit}>
                enter id : <input type="text" name='id' value={emp.id} onChange={handleChange} /> <br /><br />
                enter name : <input type="text" name='name' value={emp.name} onChange={handleChange} /> <br /><br />
                enter role : <input type="text" name='role' value={emp.role} onChange={handleChange} /> <br /><br />
                enter salary : <input type="text" name='salary' value={emp.salary} onChange={handleChange} /> <br /><br />
                <button type='submit'>Add Employee</button>
            </form>
        </div>
    )
}

export default AddEmployee
