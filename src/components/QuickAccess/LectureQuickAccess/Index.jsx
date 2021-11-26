import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

import Person from "../../../assets/dashboard/person"
import CreateAccount from "../../../assets/dashboard/createAccount"
import ResetPassword from "../../../assets/dashboard/resetPassword"
import LecturerList from "../../../assets/dashboard/lecturerList"
import PadLockIcon from "../../../assets/dashboard/padLock"
import styles from "./styles.module.css"

const QuickAccess = (props) => {
  const [hoverItem, setHoverItem] = useState("")

  const history = useHistory()

  const handleHoverChange = (item) => {
    setHoverItem(item)
  }

  const handlePageChange = (url) => {
    props.setStartToggle(false)
    history.push(url)
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Student Quick Access</h3>

      <ul className={styles.containerTwo}>

        <li 
          onClick={() => handlePageChange("")}
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("retroStudent")} 
          className={styles.item}
        >
          {hoverItem === "retroStudent" ? <CreateAccount color="#DF8A09" /> : <CreateAccount color="#2D0353" />}
          <p className={styles.name}>Create Account</p>
        </li>

        <li 
          onClick={() => handlePageChange("")}
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("person")} 
          className={styles.item}
        >
          {hoverItem === "person" ? <Person color="#DF8A09" /> : <Person color="#2D0353" />}
          <p className={styles.name}>Biodata Correction</p>
        </li>

        <li 
          onClick={() => handlePageChange("")}
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("padLock")} 
          className={styles.item}
        >
          {hoverItem === "padLock" ? <LecturerList color="#DF8A09" /> : <LecturerList color="#2D0353" />}
          <p className={styles.name}>Lecturer List</p>
        </li>

        <li 
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("resetPassword")} 
          className={styles.item}
        >
          {hoverItem === "resetPassword" ? <ResetPassword color="#DF8A09" /> : <ResetPassword color="#2D0353" />}
          <p className={styles.name}>Social Media</p>
        </li>
      </ul>
    </div>
  )
}

export default QuickAccess