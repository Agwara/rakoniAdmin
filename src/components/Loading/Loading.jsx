import React from "react"

import styles from "./styles.module.css"


const Loading = (props) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        {
          props.text ? props.text : <h3>Loading Data...</h3>
        }
        <div className={styles.loader}></div>
      </div>
    </div>

  )
}

export default Loading