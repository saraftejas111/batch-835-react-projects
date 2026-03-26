import React, { useState } from 'react'

const CounterApp = () => {

    let [count, setCount] = useState(0)

    return (
        <div>

            <center>
                <h1>Counter App</h1>

                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
                <button onClick={() => setCount(count * 0)}>Reset</button>

                <h2>Counter = {count}</h2>
            </center>
        </div>
    )
}

export default CounterApp
