import React from 'react'
import Props from './Props'

function Demo() {
    return "Don't Watch Start Build!..."
}

function Hero({ ids, names, ages, citys }) {
    const name = "welcome to reactjs"
    const arr = [1, 2, 3, 4, 5]
    const course = {
        front: "React",
        back: "Java & SpringBoot",
        Data: "SQL",
        cloud: "AWS"
    }
    const fruits = [
        { id: "1", name: "Apple", price: "25", color: "red" },
        { id: "2", name: "Banana", price: "12", color: "yellow" },
        { id: "3", name: "Carrot", price: "20", color: "orange" }
    ]

    return (
        <div >
            <h6>Hello from Hero component</h6>
            <h6>{name}</h6>
            <h6>{Demo()}</h6>
            <h3>{ids} — {names} — {ages} — {citys}</h3>
            <Props
                name="Welcome to React"
                message="It is a Library, not a Framework"
                arr={arr}
                obj={course}
                fruits={fruits}
            />

        </div>
    )
}

export default Hero
