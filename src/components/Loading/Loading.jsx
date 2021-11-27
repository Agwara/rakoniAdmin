import React from "react"

import styles from "./styles.module.css"


const Loading = () => {
  return (
    <div className={styles.loadingAnimation}>
      <h3>Loading Data...</h3>
      <div className={styles.loader}></div>
    </div>
  )
}

export default Loading