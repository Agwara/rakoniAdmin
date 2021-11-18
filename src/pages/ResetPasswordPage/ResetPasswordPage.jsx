import React from "react"

import ResetPassword from "../../components/Auth/ResetPassword/ResetPassword"

import WelcomeAside from "../../components/WelcomeAside/WelcomeAside"

import styles from "./styles.module.css"

const ResetPasswordPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <WelcomeAside />
      </div>
      <div className={styles.item2}>
        <ResetPassword />
      </div>
    </div>
  )
}

export default ResetPasswordPage;