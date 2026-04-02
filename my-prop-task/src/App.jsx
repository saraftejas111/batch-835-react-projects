
import { useState } from 'react'
import './App.css'
import Addition from './components/Addition'
import Substraction from './components/Substraction'
import Child from './components/Child'
import Multiply from './components/Multiply'
import EmployeeList from './components/EmployeeList'
import AddEmployee from './components/AddEmployee'

function App() {   // parent component

  let [num1, setNum1] = useState(0)
  let [num2, setNum2] = useState(0)

  let [employees, setEmployees] = useState([])

  const handleMsg = (mg) => {
    console.log(mg)
  }

  const acceptEmp = (emp) => {
    setEmployees([...employees, emp])
  }

  const deleteEmployee = (id) => {
  setEmployees(employees.filter((e) => e.id !== id));
};
  return (
    <>
      <center>
        <h1>Welcome to my Prop task</h1>

        enter num 1 : <input type="text" value={num1} onChange={(e) => setNum1(Number(e.target.value))} /> <br /><br />
        enter num 2 : <input type="text" value={num2} onChange={(e) => setNum2(Number(e.target.value))} /> <br /><br />

        <Addition n1={num1} n2={num2} />

        <Substraction s1={num1} s2={num2} />

        <Multiply m1={num1} m2={num2} />

        <Child sendMsg={handleMsg} />

        <EmployeeList emps={employees} deleteEmp={deleteEmployee} />
        <AddEmployee sendEmp={acceptEmp} />
      </center>
    </>
  )
}

export default App
