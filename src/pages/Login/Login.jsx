import React from "react"

import LoginForm from "../../components/Auth/LoginForm/LoginForm"
import WelcomeAside from "../../components/WelcomeAside/WelcomeAside"

import loginStyles from "./Login.module.css"

const Login = () => {
  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.item1}>
        <WelcomeAside />
      </div>
      <div className={loginStyles.item2}>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login;