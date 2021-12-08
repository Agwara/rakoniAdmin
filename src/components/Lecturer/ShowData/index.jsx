import React from "react"

import studentImage from "../../../assets/profile/student.png"
import styles from "./styles.module.css"

const data = {
  "image": studentImage,
  "department": "statistics",
  "matricNum": "STA/19/7009",
  "firstName": "Alonso",
  "lastName": "Xabi",
  "email": "xabialonso@gmail.com",
  "utmeNumber": "20161876562",
  "stateOrigin": "Zamfara",
  "registeredSemester": "No",
  "submittedCourseForm": "No"
}

const ShowData = (props) => {

  const action = () => {
    props.setShowModal(true)
  }
  return (
    <div className={styles.container}>
      <div className={styles.pictureContainer}>
        <div className={styles.containerTwo}>
          <img
            alt="" 
            src={data["image"]}
            className={styles.studentImage}
          />
          <div className={styles.containerThree}>
            <div>
              <p className={styles.variable}>Department</p>
              <p className={styles.variableValue}>{data["department"]}</p>
            </div>
            
            <div>
              <p className={styles.variable}>Lecturer ID:</p>
              <p className={styles.variableValue}>{data["matricNum"]}</p>
            </div>
          </div>
        </div>

        <div onClick={action} className={styles.editBtn} style={{backgroundColor: props.btnColor}}>
          { props.btnIcon ? <img alt="" src={props.btnIcon} /> : <div></div>}{props.btnText}
        </div>
      </div>

      <div className={styles.mainDetails}>
        <div className={styles.detailText}>
          <span className={styles.title}>First Name</span>
          <p className={styles.titleValue}>{data["firstName"]}</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>Last Name</span>
          <p className={styles.titleValue}>{data["lastName"]}</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>Email</span>
          <p className={styles.titleValue}>{data["email"]}</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>UTME Number</span>
          <p className={styles.titleValue}>{data["utmeNumber"]}</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>State Of Origin</span>
          <p className={styles.titleValue}>{data["stateOrigin"]}</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>Role</span>
          <p className={styles.titleValue}>Lecturer 1</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>Course Assigned</span>
          <p className={styles.titleValue}>CSC 200, STA 309, CSC400</p>
        </div>
      </div>
    </div>
  )
}

export default ShowData