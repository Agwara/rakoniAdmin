import React from "react"

import styles from "./styles.module.css"

const ResultItem = (props) => {
  return (
    <div style={{backgroundColor: props.bg}} className={styles.resultItem}>
      <div className={`${styles.resultItemText} ${styles.paddingLeft}`}>{props.course["courseCode"]}</div>
      <p className={`${styles.resultItemText}`}>{props.course["department"]}</p>
      <p className={`${styles.resultItemText}`}>{props.course["courseTitle"]}</p>
      <p className={`${styles.resultItemText} ${styles.smallPaddingLeft}`}>{props.course["unit"]}</p>
      <p className={`${styles.resultItemText} ${styles.smallPaddingLeft} ${styles.grade}`}>{props.course["grade"]}</p>
      <p className={`${styles.resultItemText} ${styles.smallPaddingLeft}`}>{props.course["semester"]}</p>
      <p className={`${styles.resultItemText} ${styles.smallPaddingLeft}`}>{props.course["level"]}</p>
    </div>
  )
}

export default ResultItem