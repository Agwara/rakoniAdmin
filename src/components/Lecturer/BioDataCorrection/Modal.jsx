import React from "react"
import { useHistory } from "react-router"

import successIcon from "../../../assets/otherIcons/successPrint.svg"
import styles from "./styles.module.css"

const Modal = () => {

  const history = useHistory()

  const goToDashboard = () => {
    history.push("/")
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <img
          alt=""
          src={successIcon} 
          height="120"
          width="100"
        />

        <p className={styles.successText}>Successful</p> 

        <p className={styles.secondText}>Lecturer biodata has been<br/> successfully updated</p> 

        <div className={styles.btnContainer}>
          <button onClick={goToDashboard} className={styles.activeBtn}>Ok</button>
        </div>
      </div>
    </div>
  )
}

export default Modal