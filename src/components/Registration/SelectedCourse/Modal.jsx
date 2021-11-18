import React from "react"
import {useHistory} from "react-router-dom"

import styles from "./styles.module.css"

const Modal = (props) => {
  const history = useHistory()

  const cancelRegistration = () => {
    props.setShowModal(false)
  }

  const continueRegistration = () => {
    props.setShowModal(false)
    history.push("/registration/course-form")
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <p className={styles.noteTitle}>Note</p>

        <p className={styles.modalText}>The selected courses have been updated on your course form. Please check critically for course duplication</p>

        <div className={styles.modalAction}>
          <div className={styles.modalCancel} onClick={cancelRegistration}>Cancel</div>
          <div className={styles.modalContinue} onClick={continueRegistration}>Continue</div>
        </div>
      </div>
    </div>
  )
}

export default Modal