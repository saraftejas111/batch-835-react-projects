import React from 'react'

const Child = ({sendMsg}) => {

    let msg = "hello from child..."


  return (
    <div>
      
      <button onClick={()=>sendMsg(msg)}>Send</button>
    </div>
  )
}

export default Child
