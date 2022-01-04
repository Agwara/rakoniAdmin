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


      {
        props.showRetro ? 
        <div className={styles.textContainerOne}>
          <h3 className={styles.headerTextOne}>Retrospective Registartion</h3>

          <p className={styles.textTwo}>Upload course registration in CSV format. Only two fields are required</p>

          <h5 className={styles.textThree}>Student ID and Course code</h5>
        </div> :
        <div className={styles.textContainer}>
          <h3 className={styles.headerText}>{props.infoText}</h3>
        </div>
      }

      {
        props.sideImage && 
        <img
          alt=""
          src={props.sideImage} 
          className={styles.sideImage}
        />
      }
    </div>
  )
}

export default PageInfo