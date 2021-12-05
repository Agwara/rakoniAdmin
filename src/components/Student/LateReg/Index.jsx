import React, {useState} from "react"

import PageInfo from "../../PageInfo/PageInfo"
import TextField from "../../InputFields/TextField/TextField"
import Button from "../../Button/Button"
import Loading from "../../Loading/Loading"
import Modal from "./Modal"

import student from "../../../assets/pageInfo/student.svg"

import styles from "./styles.module.css"


const LateReg = () => {
  const [studentID, setStudentID] = useState("")

  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const lateRegAction = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setShowModal(true)
    }, 2000)
  }

  return (
    <div className={styles.container}>
      <PageInfo infoText="Late Registration" sideImage={student} />

      <h3 className={styles.subHeadText}>Enter Student Details</h3>

      <div className={styles.formContainer}>
        <div className={styles.formField}>
          <TextField type="text" label="Student ID" value={studentID} setValue={setStudentID} />
        </div>

        <div className={styles.btn}>
          <Button name="Allow" action={lateRegAction} />
        </div>
      </div>

      {
        loading ? <Loading /> : <div></div>
      }

      {showModal ? <Modal /> : <div></div>}

    </div>
  )
}

export default LateReg

