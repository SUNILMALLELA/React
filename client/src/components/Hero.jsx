import React from 'react'
function Demo() {
    return "Don't Watch Start Build!..."
}
function Hero() {
    const name = "welcome to react"
    return (
        <div>
            <h6>Hello from a component</h6>
            <h6>{name}</h6>
            <h6>{Demo()}</h6>
        </div>
    )
}

export default Hero

