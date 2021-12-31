import React, {useState} from "react"

import infoIcon from "../../../assets/otherIcons/info.svg"
import styles from "./styles.module.css"

const Modal = (props) => {
  const [activeBtn, setActiveBtn] = useState(false)

  const [showSuccess, setShowSuccess] = useState(false)


  const closeModal = () => {
    props.setShowModal(false)
  }

  const showSuccessAction = () => {
    props.startCountDown()
    props.setShowModal(false)
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <img
          alt=""
          src={infoIcon} 
          height="120"
          width="100"
        />

        <p className={styles.secondText}>Are you sure you want to start a countdown for student registration ?</p> 
        
        <div className={styles.btnContainer}>
          <button onClick={closeModal} className={!activeBtn ? styles.activeBtn : styles.nonActiveBtn}>
            No
          </button>
          <button onClick={showSuccessAction} className={activeBtn ? styles.activeBtn : styles.nonActiveBtn}>
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal