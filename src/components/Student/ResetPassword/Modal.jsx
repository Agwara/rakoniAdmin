import React from "react"

import successIcon from "../../../assets/otherIcons/successPrint.svg"
import styles from "./styles.module.css"

const Modal = () => {

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

        <p className={styles.secondText}>Student new password has been<br/> successfully updated</p> 

        <div className={styles.btnContainer}>
          <button onClick={goToDashboard} className={styles.activeBtn}>Ok</button>
        </div>
      </div>
    </div>
  )
}

export default Modal