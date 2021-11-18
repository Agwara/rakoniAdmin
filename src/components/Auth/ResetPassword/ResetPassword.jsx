import React, {useState} from "react"
import { useHistory} from "react-router-dom"

import Button from "../../Button/Button"
import TextField from "../../InputFields/TextField/TextField"
import styles from "./styles.module.css" 

import starIcon from "../../../assets/otherIcons/greenStar.svg"

const ResetPassword = () => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCongrats, setShowCongrats] = useState(true)

  const history = useHistory()
  
  const startLogin = () => {
    history.push("/")
  }


  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div 
          className={showCongrats ? styles.verification : styles.closeVerification}
        >
          <p className={styles.verificationText}>Congratulations, your password has been reset</p>
          <img
            alt=""
            src={starIcon} 
            className={styles.img}
            onClick={() => setShowCongrats(false)}
          />
        </div>
        <div className={styles.formHeader}>
          <h3>Create a new login password</h3>
        </div>

        <div className={`${styles.password} ${styles.formInputWidth}`}>
          <TextField
            label="Enter your new password"
            type="password"
            value={password}
            setValue={setPassword}
          />
        </div>

        <div className={`${styles.studentNumber} ${styles.formInputWidth}`}>
          <TextField
            label="Re-enter your password"
            type="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
        </div>

        <div className={`${styles.loginBtn} ${styles.formInputWidth}`}>
          <Button
            name="Log in" 
            action={startLogin}
          />
        </div>
      </div>

      <p className={styles.rakoni}>Powered By Rakoni</p>
    </div>
  )
}

export default ResetPassword
