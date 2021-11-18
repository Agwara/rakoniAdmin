import React from "react"

import DownloadItems from "./DownloadItems"

import styles from "./stylesTwo.module.css"

const DownloadFilesList = (props) => {
  const renderDataFetchState = () => {
    if (props.fetchResultState === "loading") {
      return (
        <div className={styles.loadingAnimation}>
          <h3>Loading Data...</h3>
          <div className={styles.loader}></div>
        </div>
      )
    } else if ((props.fetchResultState === "loaded") && props.courseFiles.length > 0) {
      return (
        <div className={styles.resultItems}>
          {
            props.courseFiles.map((file, i) => {
              if (((i + 1) % 2) === 0) {
                return <DownloadItems key={`${i}`} bg="#FAFAFA" file={file} />
              } else {
                return <DownloadItems key={`${i}`} bg="#FFFFFF" file={file} />
              }
            })
          }
        </div>
      )
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.getResult}>
        <div className={styles.resultHeader}>
          <p className={`${styles.tableHeaderText} ${styles.paddingLeft}`}>Date</p>
          <p className={styles.tableHeaderText}>Course Code</p>
          <p className={styles.tableHeaderText}>Document Title</p>
          <p className={styles.tableHeaderText}></p>
        </div>

        {renderDataFetchState()}
      </div>
    </div>
  )
}

export default DownloadFilesList