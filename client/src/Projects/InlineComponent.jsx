// const Header = { color: "grey", fontSize: "120px" }
// import React from 'react'
// function InlineComponent() {
//     return (
//         <h1 style={Header}>Inline Components</h1>
//     )
// }
// export default InlineComponent

import React from 'react'
//import './InlineComponent.css'
import styles from './InlineComponent.module.css'
function InlineComponent() {
    return (
        <>
            <h1 className={styles.header}> It is Inline Component</h1>

        </>
    )
}

export default InlineComponent