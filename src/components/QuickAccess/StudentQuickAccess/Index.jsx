import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom"

import Person from "../../../assets/dashboard/person"
import ResetPassword from "../../../assets/dashboard/resetPassword"
import StudentIcon from "../../../assets/dashboard/retroStudent"
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
          onClick={() => handlePageChange("/student/bio-data-correction")}
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("person")} 
          className={styles.item}
        >
          {hoverItem === "person" ? <Person color="#DF8A09" /> : <Person color="#2D0353" />}
          <p className={styles.name}>Biodata Correction</p>
        </li>

        <li 
          onClick={() => handlePageChange("/student/retrospective-reg")}
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("retroStudent")} 
          className={styles.item}
        >
          {hoverItem === "retroStudent" ? <StudentIcon color="#DF8A09" /> : <StudentIcon color="#2D0353" />}
          <p className={styles.name}>Retrospective Student</p>
        </li>

        <li 
          onClick={() => handlePageChange("/student/block-unblock")}
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("padLock")} 
          className={styles.item}
        >
          {hoverItem === "padLock" ? <PadLockIcon color="#DF8A09" /> : <PadLockIcon color="#2D0353" />}
          <p className={styles.name}>Block/Unblock Student</p>
        </li>

        <li 
          onClick={() => handlePageChange("/student/reset-password")}
          onMouseLeave={() => handleHoverChange("")} 
          onMouseEnter={() => handleHoverChange("resetPassword")} 
          className={styles.item}
        >
          {hoverItem === "resetPassword" ? <ResetPassword color="#DF8A09" /> : <ResetPassword color="#2D0353" />}
          <p className={styles.name}>Reset Password</p>
        </li>
      </ul>
    </div>
  )
}

export default QuickAccess