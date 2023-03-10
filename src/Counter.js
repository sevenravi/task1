import React, { useState } from 'react'

export default function Counter() {
    const [count, setcount] = useState(0)
    return (
        <div className="App text-center">
            <div className="card my-5">
                <h1>Counter App</h1>
                <div className="body my-5">
                    <h2 className='my-5'>{count}</h2>
                    <button className="btn btn-success mx-3" onClick={() => { setcount(count + 1) }} >Increment</button>
                    <button className="btn btn-danger mx-3" onClick={() => { setcount(count - 1) }} disabled={count === 0}>Decrement</button>
                    <button className="btn btn-secondary mx-3" onClick={() => { setcount(0) }} disabled={count === 0}>Reset</button>
                </div>

            </div>

        </div>
    )
}
