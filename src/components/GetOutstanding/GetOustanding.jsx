import React, { useState, useEffect } from "react"

import ResultItem from "./ResultItem"

import styles from "./styles.module.css"

const GetOutstanding = () => {
  const [loadingState, setLoadingState] = useState("loading")

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoadingState("success")
    }, 2000)

    return () => {
      setMounted(false)
    }
  })

  const renderUiState = () => {
    if (loadingState === "loading") {
      return (
        <div className={styles.loadingAnimation}>
          <h3>Loading Data...</h3>
          <div className={styles.loader}></div>
        </div>
      )
    } else if (loadingState === "error") {
      return (
        <div className={styles.errorInLoading}>

        </div>
      ) 
    } else if (loadingState === "success") {
      return (
        <div className={styles.resultItems}>
          { 
            studentCourses.map((course, i) => {
              if (((i + 1) % 2) === 0) {
                return <ResultItem key={`${i}`} bg="#FAFAFA" course={course} />
              } else {
                return <ResultItem key={`${i}`} bg="#FFFFFF" course={course} />
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
          <p className={`${styles.tableHeaderText} ${styles.paddingLeft}`}>Course Code</p>
          <p className={styles.tableHeaderText}>Department</p>
          <p className={styles.tableHeaderText}>Course Title</p>
          <p className={styles.tableHeaderText}>Unit</p>
          <p className={styles.tableHeaderText}>Grade</p>
          <p className={styles.tableHeaderText}>Semester</p>
          <p className={styles.tableHeaderText}>Level</p>
        </div>

        {renderUiState()}
      </div>
    </div>
  )
}

export default GetOutstanding

const studentCourses = [
  {
    "courseCode": "STA 101",
    "department": "Statistics",
    "courseTitle": "Introduction to statistics and maths",
    "unit": 4,
    "semester": "First",
    "grade": "F",
    "level": 100
  },

  {
    "courseCode": "BIO 101",
    "department": "Biology",
    "courseTitle": "Introduction to biology",
    "unit": 3,
    "semester": "First",
    "grade": "F",
    "level": 100
  },

  {
    "courseCode": "CHM 101",
    "department": "Chemistry",
    "courseTitle": "Introduction to chemistry",
    "unit": 4,
    "semester": "First",
    "grade": "F",
    "level": 100
  },

  {
    "courseCode": "BIO 101",
    "department": "Biology",
    "courseTitle": "Introduction to biology",
    "unit": 3,
    "semester": "First",
    "grade": "F",
    "level": 100
  },

  {
    "courseCode": "CHM 101",
    "department": "Chemistry",
    "courseTitle": "Introduction to chemistry",
    "unit": 4,
    "semester": "First",
    "grade": "F",
    "level": 100
  }
]