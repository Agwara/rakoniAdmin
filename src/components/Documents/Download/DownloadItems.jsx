import React from "react"

import documentIcon from "../../../assets/otherIcons/document.svg"
import downloadIcon from "../../../assets/otherIcons/downloadIcon.svg"

import styles from "./stylesTwo.module.css"


const DownloadItems = (props) => {
  return (
    <div style={{backgroundColor: props.bg}} className={styles.downloadItem}>
      <p className={`${styles.downloadItemText} ${styles.paddingLeft}`}>{props.file["Date"]}</p>
      <p className={`${styles.downloadItemText}`}>{props.file["CourseCode"]}</p>

      <div className={styles.iconContainer}>
        <img
          alt=""
          src={documentIcon} 
        />
        <p className={`${styles.downloadItemText}`}>{props.file["DocumentTitle"]}</p>
      </div>

      <div className={`${styles.iconContainer} ${styles.downloadContainer}`}>
        <img
          alt=""
          src={downloadIcon} 
        />
        <p className={`${styles.downloadItemText} ${styles.downloadText}`}>Download</p>
      </div>
    </div>
  )
}

export default DownloadItems