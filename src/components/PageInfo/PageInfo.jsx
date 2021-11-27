import React from "react"

import styles from "./styles.module.css" 

/* 
  This component receives the following properties:

  * infoText  ---> For page description
  * sideImage  ---> For the side image

*/
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