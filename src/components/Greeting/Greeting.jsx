import React from "react"

import greetingStyles from "./Greeting.module.css"

const Greeting = () => {
  return (
    <div className={greetingStyles.container}>
      <div className={greetingStyles.containerTwo}>
        <p className={greetingStyles.welcome}>Welcome Back</p>
        <h3 className={greetingStyles.student}>Magnus Carlsen</h3>
      </div>
      <div className={greetingStyles.containerThree}>
        <p className={greetingStyles.quotes}>
          Develop a passion for learning. If you do, you will never
          cease to grow. - <span className={greetingStyles.author}>Anthony J.D'Angelo</span>
        </p>
      </div>
    </div>
  )
}

export default Greeting