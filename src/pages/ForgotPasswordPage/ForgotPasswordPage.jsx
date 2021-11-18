import React from "react"

import ForgotPassword from "../../components/Auth/ForgotPassword/ForgotPassword"
import WelcomeAside from "../../components/WelcomeAside/WelcomeAside"

import styles from "./styles.module.css"

const ForgotPasswordPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <WelcomeAside />
      </div>
      <div className={styles.item2}>
        <ForgotPassword />
      </div>
    </div>
  )
}

export default ForgotPasswordPage;