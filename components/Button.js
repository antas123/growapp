import React from 'react'
import styles from "../styles/btn.module.css"


const Button = (props) => {


  return (
        <button className={styles.button}>{props.name}</button>
  )
}

export default Button