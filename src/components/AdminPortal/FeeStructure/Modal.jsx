import React, {useState} from "react"
import { useHistory } from "react-router"

import infoIcon from "../../../assets/otherIcons/info.svg"
import successIcon from "../../../assets/otherIcons/successPrint.svg"
import styles from "./modal.module.css"

const Modal = (props) => {
  const [activeBtn, setActiveBtn] = useState(false)

  const [showSuccess, setShowSuccess] = useState(false)

  const history = useHistory()

  const closeModal = () => {
    props.setShowModal(false)
  }

  const showSuccessAction = () => {
    setShowSuccess(true)
  }

  const goToDashboard = () => {
    history.push("")
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <img
          alt=""
          src={showSuccess ? successIcon : infoIcon} 
          height="120"
          width="100"
        />

        {showSuccess ? <p className={styles.successText}>Success</p> : <div></div>}

        {
          showSuccess ? <p className={styles.secondText}>New student fees has been <br/> updated successfully</p> 
          : <p className={styles.secondText}>Are you sure you want to update<br/> student fees?</p> 
        }

        <div className={styles.btnContainer}>
          {
            showSuccess ? 
            <button onClick={goToDashboard} className={styles.activeBtn}>Ok</button>
            : <>
              <button onClick={closeModal} className={!activeBtn ? styles.activeBtn : styles.nonActiveBtn}>
                No
              </button>
              <button onClick={showSuccessAction} className={activeBtn ? styles.activeBtn : styles.nonActiveBtn}>
                Yes
              </button>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Modal