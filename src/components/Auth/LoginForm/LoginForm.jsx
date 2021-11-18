import React, {useState} from "react"
import { useHistory} from "react-router-dom"

import Button from "../../Button/Button"
import TextField from "../../InputFields/TextField/TextField"
import styles from "./styles.module.css" 

const LoginForm = () => {
  const [adminUsername, setAdminUsername] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()
  
  const startLogin = () => {
    history.push("/")
  }

  const goToForgotPassowrd = () => {
    history.push("/forgot-password")
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <h3>Log in to your account</h3>
        </div>

        <div className={`${styles.studentNumber} ${styles.formInputWidth}`}>
          <TextField
            label="Admin username"
            type="text"
            value={adminUsername}
            setValue={setAdminUsername}
          />
        </div>

        <div className={`${styles.password} ${styles.formInputWidth}`}>
          <TextField
            label="Password"
            type="password"
            value={password}
            setValue={setPassword}
          />
        </div>

        <div className={`${styles.loginBtn} ${styles.formInputWidth}`}>
          <Button
            name="Log in" 
            action={startLogin}
          />
        </div>

        <div className={`${styles.forgotPassword} ${styles.formInputWidth}`}>
          <p>Forgot your password? <span onClick={goToForgotPassowrd} className={styles.clickHere}>Click here</span></p>
        </div>
      </div>

      <p className={styles.rakoni}>Powered By Rakoni</p>
    </div>
  )
}

export default LoginForm
