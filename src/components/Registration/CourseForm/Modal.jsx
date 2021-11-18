import React from "react"

import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"

import {clearRegisteredCourses} from "../../../features/registeredCourses/registeredCourseSlice"
import successIcon from "../../../assets/otherIcons/successPrint.svg"

import styles from "./styles.module.css"

const Modal = (props) => {

  const history = useHistory()

  const dispatch = useDispatch()

  const goToDashboard = () => {
    props.setShowModal(false)
    dispatch(clearRegisteredCourses())
    history.push("/")
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>

        <div className={styles.modalContainerTwo}>
          <img
            alt="" 
            src={successIcon}
          />
          <p className={styles.successText}>Success</p>
        </div>

        <p className={styles.successStory}>
          Your course form for 2021-2022 academic section has been submitted successfully
        </p>

        <div className={styles.modalAction}>
          <div className={styles.modalGoHome} onClick={goToDashboard}>Ok</div>
        </div>
      </div>
    </div>
  )
}

export default Modal