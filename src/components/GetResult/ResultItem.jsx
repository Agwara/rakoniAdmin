import React from "react"

import styles from "./GetResult.module.css"

const ResultItem = (props) => {
  return (
    <div style={{backgroundColor: props.bg}} className={styles.resultItem}>
      <div className={`${styles.resultItemText} ${styles.paddingLeft}`}>{props.course["courseCode"]}</div>
      <p className={`${styles.resultItemText}`}>{props.course["department"]}</p>
      <p className={`${styles.resultItemText}`}>{props.course["courseTitle"]}</p>
      <p className={`${styles.resultItemText} ${styles.smallPaddingLeft}`}>{props.course["unit"]}</p>
      <p className={`${styles.resultItemText} ${styles.smallPaddingLeft}`}>{props.course["score"]}</p>
      <p className={`${styles.resultItemText} ${styles.smallPaddingLeft}`}>{props.course["grade"]}</p>
      <p className={`${styles.resultItemText} ${styles.smallPaddingLeft}`}>{props.course["point"]}</p>
    </div>
  )
}

export default ResultItem