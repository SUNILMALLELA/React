import React from 'react'
import Cond2 from './Cond2'
const fruits = [
    { id: "1", name: "Apple", price: "25", color: "red", soldOut: true },
    { id: "2", name: "Banana", price: "12", color: "yellow", soldOut: true },
    { id: "3", name: "Carrot", price: "20", color: "orange", soldOut: true }
]

function Cond1() {
    return (
        <>
            <h1>Don't Watch Start Building</h1>
            <Cond2 arr={fruits} />
        </>
    )
}

export default Cond1