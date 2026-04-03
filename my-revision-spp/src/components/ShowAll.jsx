import React, { useEffect, useState } from 'react'
import { getAllEmployees } from '../services'

const ShowAll = () => {

    let [allemps, setAllEmps] = useState([])

    const loadEmployees = () => {
        setAllEmps(getAllEmployees)
    }

    useEffect(() => {
        loadEmployees();
    }, [])

    return (
        <div>

            <h2>All Employees </h2>

            <table border="1">
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
                        allemps.map((e) => (
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
