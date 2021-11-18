import React from "react"

import schoolLogo from "../../../assets/otherIcons/schoolLogo.svg"
import studentImage from "../../../assets/profile/student.png"
import signature from "../../../assets/otherIcons/signature.png"

import styles from "./stylesTwo.module.css"

class CourseForm extends React.Component {
  render () {
    return (
      <div className={styles.courseForm}>
        <div className={styles.universitySection}>
          <img
            alt=""
            src={schoolLogo} 
          />
  
          <div className={styles.textContainer}>
            <p className={styles.schoolname}>Federal University of Technology Akure</p>
            <p className={styles.textTwo}>Course Form</p>
          </div>
        </div>
  
        <div className={styles.studentInfo}>
          <ul className={styles.detailsList}>
            <li className={styles.detailsItem}>
              <p className={styles.infoName}>Matric Number:</p>
              <p className={styles.infoValue}>STA/20/7009</p>
            </li>
            <li className={styles.detailsItem}>
              <p className={styles.infoName}>Full Name:</p>
              <p className={styles.infoValue}>Ayomide Akinyemi</p>
            </li>
            <li className={styles.detailsItem}>
              <p className={styles.infoName}>Department:</p>
              <p className={styles.infoValue}>Engineering</p>
            </li>
            <li className={styles.detailsItem}>
              <p className={styles.infoName}>Programme:</p>
              <p className={styles.infoValue}>Statistics</p>
            </li>
            <li className={styles.detailsItem}>
              <p className={styles.infoName}>Level:</p>
              <p className={styles.infoValue}>100</p>
            </li>
            <li className={styles.detailsItem}>
              <p className={styles.infoName}>Semester:</p>
              <p className={styles.infoValue}>Second semester 2020-2021</p>
            </li>
          </ul>
  
          <img
            alt="" 
            src={studentImage}
            height="150"
            width="150"
          />
        </div>
  
        <div className={styles.registeredCourses}>
          <p className={styles.registeredTitle}>List Of Registered Courses</p>
  
          <div className={styles.registeredCoursesTitle}>
            <p className={`${styles.headerCell} ${styles.borderRight}`}>S/N</p>
            <p className={`${styles.headerCell} ${styles.borderRight}`}>Course Code</p>
            <p className={`${styles.headerCell} ${styles.borderRight}`}>Course Title</p>
            <p className={styles.headerCell}>Unit</p>
          </div>
  
          {
            registeredCourse.map((course, key) => (
              <div key={`${course["courseCode"]}${key}`} className={styles.registeredCoursesItem}>
                <p className={`${styles.elementCell} ${styles.borderRight}`}>{key+1}</p>
                <p className={`${styles.elementCell} ${styles.borderRight}`}>{course["courseCode"]}</p>
                <p className={`${styles.elementCell} ${styles.borderRight}`}>{course["courseTitle"]}</p>
                <p className={styles.elementCell}>{course["unit"]}</p>
              </div>
            ))
          }
          <div className={styles.registeredCoursesItem}>
            <p className={`${styles.elementCell} ${styles.borderRight}`}></p>
            <p className={`${styles.elementCell} ${styles.textColor} ${styles.borderRight}`}>Total</p>
            <p className={`${styles.elementCell} ${styles.borderRight}`}></p>
            <p className={`${styles.elementCell} ${styles.textColor}`}>24</p>
          </div>
  
          <div className={styles.signatureContainer}>
            <div className={styles.signatureNameContainer}>
              <p className={styles.signatureName}>Olabode Felix</p>
              <p className={styles.signatureNameLight}>Student's Signature</p>
            </div>
  
            <div className={styles.signatureNameContainer}>
              <img
                alt=""
                src={signature}
                className={styles.signatureImage}
              />
              <p className={styles.signatureDate}>Date</p>
            </div>
          </div>
  
          <div className={styles.signatureContainer}>
            <div className={styles.signatureNameContainer}>
              <p className={styles.signatureName}>Jao Felix</p>
              <p className={styles.signatureNameLight}>Student's Signature</p>
            </div>
  
            <div className={styles.signatureNameContainer}>
              <img
                alt=""
                src={signature}
                className={styles.signatureImage}
              />
              <p className={styles.signatureDate}>Date</p>
            </div>
          </div>
  
          <div className={styles.signatureContainer}>
            <div className={styles.signatureNameContainer}>
              <p className={styles.signatureName}>Mikhail Tal</p>
              <p className={styles.signatureNameLight}>HOD course advisors signature</p>
            </div>
  
            <div className={styles.signatureNameContainer}>
              <img
                alt=""
                src={signature}
                className={styles.signatureImage}
              />
              <p className={styles.signatureDate}>Date</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
  


const registeredCourse = [
  {
    "courseCode": "STA 201",
    "courseTitle": "Introduction to Bayesian System",
    "unit": 3
  },
  {
    "courseCode": "COE 201",
    "courseTitle": "Principles Of Radar Communications",
    "unit": 4
  },
  {
    "courseCode": "STA 201",
    "courseTitle": "Introduction to Bayesian System",
    "unit": 3
  },
  {
    "courseCode": "COE 201",
    "courseTitle": "Principles Of Radar Communications",
    "unit": 4
  },
  {
    "courseCode": "MTH 203",
    "courseTitle": "Introduction To Ordinary Differential Equation",
    "unit": 3
  },
  {
    "courseCode": "COE 201",
    "courseTitle": "Principles Of Radar Communications",
    "unit": 4
  }
]

export default CourseForm