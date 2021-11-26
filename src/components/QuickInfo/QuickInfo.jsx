import React from "react"

import course from "../../assets/profile/course.svg"
import ongoing from "../../assets/profile/ongoingCourse.svg"
import outstanding from "../../assets/profile/outstanding.svg"
import totalSemester from "../../assets/profile/totalSemester.svg"

import LecturerIcon from "../../assets/dashboard/LecturerIcon"
import StudyYear from "../../assets/dashboard/studyYear"
import styles from "./styles.module.css"

const data = {
  "totalCourse": 40,
  "ongoingCourse": 23,
  "totalSemesterUnit": 22,
  "totalOutstanding": 4
}

const QuickInfo = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.infoCard} ${styles.colorOne}`}>
        <div className={styles.containerTwo}>
          <p className={styles.cardText}>100 Level</p>
          <div className={styles.iconContainer}>
            <StudyYear color="#DF8A09" />
          </div>
        </div>
        <p className={styles.cardNumber}>1200</p>
      </div>

      <div className={`${styles.infoCard} ${styles.colorTwo}`}>
        <div className={styles.containerTwo}>
          <p className={styles.cardText}>200 Level</p>
          <div className={styles.iconContainer}>
            <StudyYear color="#87D147" />
          </div>
        </div>
        <p className={styles.cardNumber}>1311</p>
      </div>

      <div className={`${styles.infoCard} ${styles.colorThree}`}>
        <div className={styles.containerTwo}>
          <p className={styles.cardText}>300 Level</p>
          <div className={styles.iconContainer}>
            <StudyYear color="#8795DE" />
          </div>
        </div>
        <p className={styles.cardNumber}>1532</p>
      </div>

      <div className={`${styles.infoCard} ${styles.colorFour}`}>
        <div className={styles.containerTwo}>
          <p className={styles.cardText}>400 Level</p>
          <div className={styles.iconContainer}>
            <StudyYear color="#787878" />
          </div>
        </div>
        <p className={styles.cardNumber}>865</p>
      </div>

      <div className={`${styles.infoCard} ${styles.colorOne}`}>
        <div className={styles.containerTwo}>
          <p className={styles.cardText}>500 Level</p>
          <div className={styles.iconContainer}>
            <StudyYear color="#F3705A" />
          </div>
        </div>
        <p className={styles.cardNumber}>682</p>
      </div>

      <div className={`${styles.infoCard} ${styles.colorTwo}`}>
        <div className={styles.containerTwo}>
          <p className={styles.cardText}>Total Lecturers</p>
          <div className={styles.iconContainer}>
            <LecturerIcon color="#F3705A" />
          </div>
        </div>
        <p className={styles.cardNumber}>140</p>
      </div>
    </div>
  )
}

export default QuickInfo