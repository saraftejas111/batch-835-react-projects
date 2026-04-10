import React from 'react'

const Settings = () => {

        const nm = localStorage.getItem('name')

  return (
    <div>
       <h3>Settings ... {nm}</h3>
    </div>
  )
}

export default Settings
