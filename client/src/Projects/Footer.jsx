import React from 'react'
import styles from './Footer.module.css'
function Footer({completedToDos,totalTodos}) {
  return (
    <>
    <div className={styles.footer}>
     <span className={styles.item}>Completed ToDos : {completedToDos}</span>
      <span className={styles.item}> Total ToDos : {totalTodos}</span>
    </div>
    </>
  )
}

export default Footer