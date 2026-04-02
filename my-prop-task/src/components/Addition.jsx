import React from 'react'

const Addition = ({n1  , n2}) => {
  return (
    <div>
      <h2>Sum = {n1+n2}</h2>
    </div>
  )
}

export default Addition

// statefull : component where data is stored in state variables
//    vs
//stateless component : no state variables are present, data is stored props
