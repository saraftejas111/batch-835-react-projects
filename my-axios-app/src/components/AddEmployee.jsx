import React, { useState } from 'react'
import { addEmployee } from '../apiServices';

const AddEmployee = () => {

    let [form , setForm] = useState({id:0 , name : "" , role : "" , salary : ""})

    const handleChange = (e) => {

        let {name , value} = e.target ; 

        setForm({...form , [name] : value})
    }

    const handleSubmit  = (e) => {

        e.preventDefault(); // to prevent refresh 

        addEmployee(form).then((res) => {

            console.log("res --> ", res)
            setForm({id:"" , name : "" , role : "" , salary : ""})
        }
        ).catch((err)=>console.log("error --> " , err))
    }
  return (
    <div>
      
      <h2>
        Add Employee Form
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='enter id'name='id' value={Number(form.id)} onChange={handleChange}/> <br /><br />
        <input type="text" placeholder='enter name'name='name' value={form.name} onChange={handleChange}/><br /><br />
        <input type="text" placeholder='enter role'name='role' value={form.role} onChange={handleChange}/><br /><br />
        <input type="text" placeholder='enter salary'name='salary' value={form.salary} onChange={handleChange}/><br /><br />

        <button type='submit'>Add Employee</button>
      </form>
    </div>
  )
}

export default AddEmployee
