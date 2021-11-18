import React from "react"
import {useHistory} from "react-router-dom"

import stutendImage from "../../assets/profile/student.png"
import styles from "./StudentProfile.module.css"

const data = {
  "image": stutendImage,
  "department": "statistics",
  "matricNum": "STA/19/7009",
  "firstName": "Alonso",
  "lastName": "Xabi",
  "email": "xabialonso@gmail.com",
  "phone": "+2347064830441",
  "parentPhone": "+2348054672914",
  "religion": "Atheist",
  "address": "Block 23A, Ixtapa Avenue, Mexico"
}

const StudentProfile = (props) => {
  const history = useHistory()

  const goToEdit = () => {
    props.setStartToggle(false)
    history.push("/edit-profile")
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
              <p className={styles.variable}>Matric No:</p>
              <p className={styles.variableValue}>{data["matricNum"]}</p>
            </div>
          </div>
        </div>

        <div onClick={goToEdit} className={styles.editBtn}>Edit Profile</div>
      </div>

      <div className={styles.mainDetails}>
        <div className={styles.detailText}>
          <span className={styles.title}>First name</span>
          <p className={styles.titleValue}>{data["firstName"]}</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>Last name</span>
          <p className={styles.titleValue}>{data["lastName"]}</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>Email</span>
          <p className={styles.titleValue}>{data["email"]}</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>Phone number</span>
          <p className={styles.titleValue}>{data["phone"]}</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>Parent phone number</span>
          <p className={styles.titleValue}>{data["parentPhone"]}</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>Address</span>
          <p className={styles.titleValue}>{data["address"]}</p>
        </div>
        <div className={styles.detailText}>
          <span className={styles.title}>Religion</span>
          <p className={styles.titleValue}>{data["religion"]}</p>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile