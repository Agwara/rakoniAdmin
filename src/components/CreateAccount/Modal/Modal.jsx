import React from "react"

import Button from "../../Button/Button"
import succesIcon from "../../../assets/otherIcons/successPrint.svg"
import styles from "./styles.module.css"

const Modal = (props) => {

  const closeModal = () => {
    props.setShowModal(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.modalContent}>
        <img
          alt=""
          src={succesIcon} 
          height="120"
          width="100"
        />

        <p className={styles.successText}>Success</p>


        <p className={styles.secondText}>Account has successfully created</p>

        <div className={styles.btn}>
          <Button name="Ok" action={closeModal} />
        </div>
      </div>
    </div>
  )
}

export default Modal