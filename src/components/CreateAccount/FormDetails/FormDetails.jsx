import React, {useState} from "react"

import TextField from "../../InputFields/TextField/TextField"
import DropDown from "../../InputFields/DropDown/DropDown"
import Button from "../../Button/Button"
import Modal from "../Modal/Modal"

import styles from "./styles.module.css"

const FormDetails = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [staffID, setStaffID] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [role, setRole] = useState("")
  const [department, setDepartment] = useState("")
  const [fullAccess, setFullAccess]= useState(false)

  const [showModal, setShowModal] = useState(false)


  const giveFullAccess = () => {
    setFullAccess(true)
  }

  const limitFullAccess = () => {
    setFullAccess(false)
  }

  const createBtn = () => {
    setShowModal(true)
  }

  return (
    <div className={styles.container}>
      {showModal ? <Modal setShowModal={setShowModal} /> : ""}
      <div>
        <TextField type="text" label="First name" value={firstName} setValue={setFirstName} />
      </div>

      <div>
        <TextField type="text" label="Last name" value={lastName} setValue={setLastName} />
      </div>

      <div className={styles.inputField}>
        <TextField type="text" label="Staff ID" value={staffID} setValue={setStaffID} />
      </div>

      <div className={styles.inputField}>
        <TextField type="number" label="Phone no" value={phoneNumber} setValue={setPhoneNumber} />
      </div>

      <div className={styles.inputField}>
        <TextField type="text" label="Email" value={email} setValue={setEmail} />
      </div>

      <div className={styles.inputField}>
        <TextField type="text" label="Address" value={address} setValue={setAddress} />
      </div>

      <div className={styles.inputField}>
        <TextField type="password" label="Password" value={password} setValue={setPassword} />
      </div>

      <div className={styles.inputField}>
        <TextField type="password" label="Re-enter Password" value={confirmPassword} setValue={setConfirmPassword} />
      </div>

      <div className={styles.inputField}>
        <DropDown label="Role" data={rolesArray} value={role} setValue={setRole} />
      </div>

      <div className={styles.inputField}>
        <DropDown label="Department" data={departmentArray} value={department} setValue={setDepartment} />
      </div> 

      <div className={styles.access}>
        <p className={styles.accessText}>Access</p>
        <div className={styles.accessAction}>
          <div className={styles.radioContainer} onClick={giveFullAccess}>
            <div className={styles.circleBorder}>
              {fullAccess ? <div className={styles.circleContent}></div> : <div></div>}
            </div>
            <p className={styles.labelText}>Full</p>
          </div>

          <div className={styles.radioContainer} onClick={limitFullAccess}>
            <div className={styles.circleBorder}>
              {!fullAccess ? <div className={styles.circleContent}></div> : <div></div>}
            </div>
            <p className={styles.labelText}>View only</p>
          </div>
        </div>
      </div>

      <div className={styles.btn}>
        <div className={styles.btnContainer}>
          <Button name="Create Account" action={createBtn} />
        </div>
      </div>
    </div>
  )
}

const rolesArray = ["Lecturer", "Admin", "Non-teaching Staff"]
const departmentArray = ["Computer Science", "Mathematics", "Robotics Engineering"]

export default FormDetails