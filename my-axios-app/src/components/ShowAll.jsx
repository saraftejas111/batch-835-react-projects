import React, { useEffect, useState } from 'react'
import { showAllEmployees } from '../apiServices'

const ShowAll = () => {

    let [employees, setEmployees] = useState([])

    const loadAllEmployees = () => {
        // promises : .then & .catch

        showAllEmployees().then((res) => {
            console.log("res --> ", res)
            setEmployees(res.data)
        }).catch((err) => {
            console.log("error --> ", err)
        } )
    }

    useEffect(()=>{
        loadAllEmployees() ; 
    },[])

    return (
        <div>
<table border='1'>
    <thead>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ROLE</th>
            <th>SALARY</th>
        </tr>
    </thead>

    <tbody>
{
    employees.map((e)=>(
        <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.role}</td>
            <td>{e.salary}</td>
        </tr>
    ))
}
    </tbody>
</table>
        </div>
    )
}

export default ShowAll
