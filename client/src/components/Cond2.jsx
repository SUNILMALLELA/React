import React from 'react'

function Cond2({ arr }) {
    return (
        <>
            <h1>Focus on One Skill</h1>
            <ul>
                {arr
                    .filter(item => Number(item.price) > 10 && !item.soldOut)
                    .map(item => (
                        <li key={item.id}>
                            {item.name} — ${item.price} — {item.color} {item.soldOut && "(sold)"}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Cond2
