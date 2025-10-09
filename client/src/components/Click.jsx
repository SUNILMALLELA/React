import React, { useState } from 'react'

function Click() {
    function Demo() {
        console.log("Hello");

    }
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(1)
    function increment() {
        setCount(count + value)

    }
    function decrement() {
        setCount(count - value)
    }
    function inc() {
        setValue(value + 1)
    }
    function dec() {
        setValue(value - 1)
    }
    return (
        <>
            <h1>The count starts from a {count}</h1>
            <button onClick={Demo}>ClickMe</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h2>The multiple inputs are{value} </h2>
            <button onClick={inc}>Add</button>
            <button onClick={dec}>rem</button>
        </>
    )
}

export default Click