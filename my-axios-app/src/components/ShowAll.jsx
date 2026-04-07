import React, { useEffect, useState } from 'react'
import { deleteEmployee, showAllEmployees } from '../apiServices'

const ShowAll = ({ refresh , handleEdit}) => {

    let [employees, setEmployees] = useState([])

    const loadAllEmployees = () => {
        // promises : .then & .catch

        showAllEmployees().then((res) => {
            console.log("res --> ", res)
            setEmployees(res.data)
        }).catch((err) => {
            console.log("error --> ", err)
        })
    }

    useEffect(() => {
        loadAllEmployees();
    }, [refresh])

    const handleDelete = (id) => {

        const sure = confirm("Do you really want to delete this data?")

        if (sure) {

            deleteEmployee(id).then((res) => {
                loadAllEmployees();
            }
            ).catch((err) => console.log("error --> ", err))

        }
    }
    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>SALARY</th>
                        <th>ACTION</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map((e) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.role}</td>
                                <td>{e.salary}</td>
                                <td>
                                    <button onClick={() => handleEdit(e)}>Edit</button>
                                    <button onClick={() => handleDelete(e.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowAll
