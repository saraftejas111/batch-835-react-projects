import React from 'react'

const EmployeeList = ({emps}) => {
  return (
    <div>

        <h2>All Employees List</h2>
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
                emps.map((e)=>(
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

export default EmployeeList
