import React, {useState} from "react"

import PageInfo from "../../PageInfo/PageInfo"
import TextField from "../../InputFields/TextField/TextField"
import Button from "../../Button/Button"
import Loading from "../../Loading/Loading"
import Modal from "./Modal"

import padLock from "../../../assets/pageInfo/padLock.svg"

import styles from "./styles.module.css"


const ResetPassword = () => {
  const [studentID, setStudentID] = useState("")
  const [studentEmail, setStudentEmail] = useState("")
  const [password, setPassword] = useState("")
  const [reEnterPassword, setReEnterPasswoed] = useState("")

  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const resetAction = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setShowModal(true)
    }, 2000)
  }

  return (
    <div className={styles.container}>
      <PageInfo infoText="Reset Password" sideImage={padLock} />

      <h3 className={styles.subHeadText}>Enter Student Details</h3>

      <div className={styles.formContainer}>
        <div className={styles.formField}>
          <TextField type="text" label="Student ID" value={studentID} setValue={setStudentID} />
        </div>

        <div className={styles.formField}>
        <TextField type="email" label="Student Email" value={studentEmail} setValue={setStudentEmail} />
        </div>

        <div className={styles.formField}>
          <TextField type="password" label="New Password" value={password} setValue={setPassword} />
        </div>

        <div className={styles.formField}>
          <TextField type="password" label="Re-enter Password" value={reEnterPassword} setValue={setReEnterPasswoed} />
        </div>

        <div className={styles.btn}>
          <Button name="Reset" action={resetAction} />
        </div>
      </div>

      {
        loading ? <Loading /> : <div></div>
      }

      {showModal ? <Modal /> : <div></div>}

    </div>
  )
}

export default ResetPassword

