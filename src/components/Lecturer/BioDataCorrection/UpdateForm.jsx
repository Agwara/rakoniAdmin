import React, {useState} from "react"

import TextField from "../../InputFields/TextField/TextField"
import DropDown from "../../InputFields/DropDown/DropDown" 
import Button from "../../Button/Button"

import Loading from "../../Loading/Loading"

import styles from "./updateForm.module.css"

const UpdateForm = (props) => {
  const [activeBtn, setActiveBtn] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [lecturerRole, setLecturerRole] = useState("")
  const [lecturerDepart, setLecturerDepart] = useState("")

  const startUpdate = () => {
    props.startUpdate()
  }

  const cancelUpdate = () => {
    props.cancelUpdate()
  }

  return (
    <div className={styles.updateContainer}>
      <div className={styles.updateContent}>
        <div className={styles.formField}>
          <TextField type="text" label="First Name" value={firstName} setValue={setFirstName} />
        </div>

        <div className={styles.formField}>
        <TextField type="text" label="Last Name" value={lastName} setValue={setLastName} />
        </div>

        <div className={styles.formField}>
          <DropDown label="Role" value={lecturerRole} data={lecturerRoles} setValue={setLecturerRole}  />
        </div>

        <div className={styles.formField}>
          <DropDown label="Department" value={lecturerDepart} data={departments} setValue={setLecturerDepart}  />
        </div>

        <div className={styles.btnContainer}>
          <button onClick={cancelUpdate} className={!activeBtn ? styles.activeBtn : styles.nonActiveBtn}>
            No
          </button>
          <button onClick={startUpdate} className={activeBtn ? styles.activeBtn : styles.nonActiveBtn}>
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

const departments = [
  "Maths", "Computer Science", "Art", "Civil Engineering"
]

const lecturerRoles = [
  "Lecturer 1",
  "Lecturer 2"
]

export default UpdateForm