import React from "react"

import course from "../../assets/profile/course.svg"
import ongoing from "../../assets/profile/ongoingCourse.svg"
import outstanding from "../../assets/profile/outstanding.svg"
import totalSemester from "../../assets/profile/totalSemester.svg"
import styles from "./StudentInfo.module.css"

const data = {
  "totalCourse": 40,
  "ongoingCourse": 23,
  "totalSemesterUnit": 22,
  "totalOutstanding": 4
}

const StudentInfo = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.infoCard} ${styles.colorOne}`}>
        <div className={styles.containerTwo}>
          <p className={styles.cardText}>Total course taken</p>
          <div className={styles.iconContainer}>
            <img
              alt=""
              src={course} 
            />
          </div>
        </div>
        <p className={styles.cardNumber}>{data["totalCourse"]}</p>
      </div>

      <div className={`${styles.infoCard} ${styles.colorTwo}`}>
        <div className={styles.containerTwo}>
          <p className={styles.cardText}>Ongoing course</p>
          <div className={styles.iconContainer}>
            <img
              alt=""
              src={ongoing} 
            />
          </div>
        </div>
        <p className={styles.cardNumber}>{data["ongoingCourse"]}</p>
      </div>

      <div className={`${styles.infoCard} ${styles.colorThree}`}>
        <div className={styles.containerTwo}>
          <p className={styles.cardText}>Total semester unit</p>
          <div className={styles.iconContainer}>
            <img
              alt=""
              src={totalSemester} 
            />
          </div>
        </div>
        <p className={styles.cardNumber}>{data["totalSemesterUnit"]}</p>
      </div>

      <div className={`${styles.infoCard} ${styles.colorFour}`}>
        <div className={styles.containerTwo}>
          <p className={styles.cardText}>Total outstanding</p>
          <div className={styles.iconContainer}>
            <img
              alt=""
              src={outstanding} 
            />
          </div>
        </div>
        <p className={styles.cardNumber}>{data["totalOutstanding"]}</p>
      </div>
    </div>
  )
}

export default StudentInfo