import React, { useEffect, useState } from 'react'

const Effect = () => {

    
  let [count, setCount] = useState(0);

  useEffect(() => {
    loadEmployees();
  }, [count])

  const loadEmployees = () => {
    console.log("All Employees List --> " + count)
  }

  const oneTimeLoad = () => {
    console.log("oneTimeLoad method")
  }

  useEffect(()=>{
    oneTimeLoad();
  },[])

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Add Employee</button>

    </div>
  )
}

export default Effect
