import React, {useState} from "react"
import { useHistory} from "react-router-dom"

import Button from "../../Button/Button"
import TextField from "../../InputFields/TextField/TextField"
import styles from "./styles.module.css" 

const ForgotPassword = () => {
  const [email, setEmail] = useState("")

  const history = useHistory()
  
  const startLogin = () => {
    history.push("/")
  }

  return (
    <div className={styles.container}>

      <p className={styles.loginText}>Log in here</p>
      
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h3>Its fine we understand you forgot your password</h3>
        </div>

        <div className={`${styles.studentNumber} ${styles.formInputWidth}`}>
          <TextField
            label="Enter your email address"
            type="email"
            value={email}
            setValue={setEmail}
          />
        </div>

        <div className={`${styles.loginBtn} ${styles.formInputWidth}`}>
          <Button
            name="Reset Password" 
            action={startLogin}
          />
        </div>
      </div>

      <p className={styles.rakoni}>Powered By Rakoni</p>
    </div>
  )
}

export default ForgotPassword
