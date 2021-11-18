import React from "react"

import QuoteCarousel from "../QuoteCarousel/QuoteCarousel"
import styles from "./styles.module.css"

const WelcomeAside = () => {
  return (
    <div className={styles.container}>
      <p className={styles.headerText}>RAKONI</p>
      <p className={styles.welcomeText}>Welcome</p>
      <div className={styles.quoteCarousel}><QuoteCarousel /></div>
    </div>
  )
}

export default WelcomeAside