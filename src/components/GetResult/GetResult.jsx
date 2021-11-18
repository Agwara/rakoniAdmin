import React from "react"

import ResultItem from "./ResultItem"
import styles from "./GetResult.module.css"

const GetResult = (props) => {

  const renderDataFetchState = () => {
    if (props.fetchResultState === "loading") {
      return (
        <div className={styles.loadingAnimation}>
          <h3>Loading Data...</h3>
          <div className={styles.loader}></div>
        </div>
      )
    } else if ((props.fetchResultState === "loaded") && props.fetchedCourses.length > 0) {
      return (
        <div className={styles.resultItems}>
          {
            props.studentCourses["courses"].map((course, i) => {
              if (((i + 1) % 2) === 0) {
                return <ResultItem key={`${i}`} bg="#FAFAFA" course={course} />
              } else {
                return <ResultItem key={`${i}`} bg="#FFFFFF" course={course} />
              }
            })
          }
          <div className={styles.resultTotals}>
            <p className={styles.resultTotalsText}>Total Unit</p>
            <p style={{gridColumn: "4/5"}} className={styles.resultTotalsText}>{props.studentCourses["totalUnits"]}</p>
            <p style={{gridColumn: "7/8"}} className={styles.resultTotalsText}>{props.studentCourses["totalPoints"]}</p>
          </div>

          <div className={styles.resultGpa}>
            <p className={styles.resultTotalsText}>GPA</p>
            <p style={{gridColumn: "4/5"}} className={styles.resultTotalsText}>{props.studentCourses["gpa"]}</p>
          </div>
        </div>
      )
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.getResult}>
        <div className={styles.resultHeader}>
          <p className={`${styles.tableHeaderText} ${styles.paddingLeft}`}>Course Code</p>
          <p className={styles.tableHeaderText}>Department</p>
          <p className={styles.tableHeaderText}>Course Title</p>
          <p className={styles.tableHeaderText}>Unit</p>
          <p className={styles.tableHeaderText}>Score</p>
          <p className={styles.tableHeaderText}>Grade</p>
          <p className={styles.tableHeaderText}>Point</p>
        </div>

        {renderDataFetchState()}
      </div>
    </div>
  )
}

export default GetResult