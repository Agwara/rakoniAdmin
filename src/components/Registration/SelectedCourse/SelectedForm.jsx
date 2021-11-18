import React, {useState, useEffect} from "react"

import { useSelector } from 'react-redux'

import CourseItem from "../../CourseItem/CourseItem"
import Button from "../../Button/Button"
import Modal from "./Modal"

import styles from "./styles.module.css"

const SelectedCourse = (props) => {
  const [loadingState, setLoadingState] = useState("loading")
  const [showModal , setShowModal] = useState(false)
  
  const [mounted, setMounted] = useState(true)

  function getSum(total, course) {
    return total + course["unit"];
  }

  const totalUnits = useSelector(state => state.registeredCourses.reduce(getSum, 0))

  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        setLoadingState("success")
      }, 2000)
    }

    return () => {
      setMounted(false)
    }
  })

  const goToCourseForm = () => {
    setShowModal(true)
  }

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
                return <CourseItem 
                  key={`${i}`} 
                  bg="#FAFAFA" 
                  course={course}
                  textColor="#787878"
                  showCheckbox={true}
                />
              } else {
                return <CourseItem 
                  key={`${i}`} 
                  bg="#FFFFFF" 
                  course={course}
                  textColor="#787878"
                  showCheckbox={true}
                />
              }
            })
          }
          <div className={styles.totalUnitSection}>
            <p className={styles.totalUnitText}>Total Units</p>

            <p className={styles.totalUnitValue}>{totalUnits}</p>
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
          <p className={styles.tableHeaderText}>Semester</p>
          <p className={styles.tableHeaderText}>Level</p>
        </div>
        
        {renderUiState()}

        <div className={styles.courseForm}>
          <div className={styles.btnContainer}>
            <Button 
              action={goToCourseForm}
              name ="Transfer to course form"
            />
          </div>
        </div>
      </div>

      {
        showModal ? <Modal setShowModal={setShowModal} /> : ""
      }
    </div>
  )
}

export default SelectedCourse

const studentCourses = [
  {
    "courseCode": "STA 101",
    "department": "Statistics",
    "courseTitle": "Introduction to statistics and maths",
    "unit": 4,
    "semester": "First",
    "level": 100
  },

  {
    "courseCode": "BIO 101",
    "department": "Biology",
    "courseTitle": "Introduction to biology",
    "unit": 3,
    "semester": "First",
    "level": 100
  },

  {
    "courseCode": "CHM 101",
    "department": "Chemistry",
    "courseTitle": "Introduction to chemistry",
    "unit": 4,
    "semester": "First",
    "level": 100
  },

  {
    "courseCode": "PHY 101",
    "department": "Biology",
    "courseTitle": "Introduction to biology",
    "unit": 3,
    "semester": "First",
    "level": 100
  },

  {
    "courseCode": "ENG 101",
    "department": "Chemistry",
    "courseTitle": "Introduction to chemistry",
    "unit": 4,
    "semester": "First",
    "level": 100
  },

  {
    "courseCode": "MTH 101",
    "department": "Chemistry",
    "courseTitle": "Introduction to chemistry",
    "unit": 4,
    "semester": "First",
    "level": 100
  },

  {
    "courseCode": "MST 101",
    "department": "Biology",
    "courseTitle": "Introduction to biology",
    "unit": 3,
    "semester": "First",
    "level": 100
  },

  {
    "courseCode": "QST 101",
    "department": "Chemistry",
    "courseTitle": "Introduction to chemistry",
    "unit": 4,
    "semester": "First",
    "level": 100
  }
]