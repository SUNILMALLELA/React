import React from 'react'

function Props({ name, message, arr, obj, fruits }) {
    return (
        <>
            <h1>{name}</h1>
            <h1>{message}</h1>
            <h2>{arr}</h2>
            <h2>{obj.front}</h2>
            <h2>{obj.back}</h2>
            <h2>{obj.Data}</h2>
            <h2>{obj.cloud}</h2>
            <ul>
                {fruits.map((fruit) => (<li key={fruit.id}>{fruit.name}-{fruit.price}-{fruit.color}</li>))}
            </ul>
        </>
    )
}

export default Props
