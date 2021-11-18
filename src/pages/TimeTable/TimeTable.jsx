import React, {useState} from "react"

import ExamTimeTable from "../../components/ExamTimeTable/ExamTimeTable"
import CourseTimeTable from "../../components/CourseTimeTable/CourseTimeTable"

import styles from "./TimeTable.module.css"

const TimeTable = () => {
  const [showExam, setShowExam] = useState(false)

  return (
    <div id="courseTimeTable" className={styles.container}>
      <h3 className={styles.header}>Course and exam time table</h3>

      <div className={styles.timeTableToggle}>
        <p 
          onClick={() => setShowExam(false)} 
          className={showExam ? `${styles.toggle} ${styles.notActive}` : `${styles.toggle} ${styles.active}`}
        >
          Course time table
        </p>

        <p
          onClick={() => setShowExam(true)} 
          className={showExam ? `${styles.toggle} ${styles.active}` : `${styles.toggle} ${styles.notActive}`}
        >
          Exam time table
        </p>
      </div>

      <div className={styles.timeTable}>
        {showExam ? <ExamTimeTable /> : <CourseTimeTable />}
        <p className={styles.timeTableText}>NB: Timetable is subjective to change</p>
      </div>
    </div>
  )
}

export default TimeTable

