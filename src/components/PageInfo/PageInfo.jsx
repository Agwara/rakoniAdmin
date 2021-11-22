import React from "react"

import styles from "./styles.module.css" 

const PageInfo = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h3 className={styles.headerText}>{props.infoText}</h3>
      </div>

      <img
        alt=""
        src={props.sideImage} 
        className={styles.sideImage}
      />
    </div>
  )
}

export default PageInfo