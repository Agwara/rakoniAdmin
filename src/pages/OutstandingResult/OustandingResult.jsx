import React from "react"
import Information from "../../components/Information/Information"
import GetOutstanding from "../../components/GetOutstanding/GetOustanding"

import outstanding from "../../assets/profile/outstanding.svg"

import styles from "./styles.module.css"

const data = {
  "totalOutstanding": 4
}

const OustandingResult = () => {
  return (
    <div className={styles.container}>
      <Information />

      <div className={`${styles.infoCard} ${styles.colorFour}`}>
        <div className={styles.containerTwo}>
          <p className={styles.cardText}>Total outstanding</p>
          <div className={styles.iconContainer}>
            <img
              alt=""
              src={outstanding} 
            />
          </div>
        </div>
        <p className={styles.cardNumber}>{data["totalOutstanding"]}</p>
      </div>

      <h3 className={styles.tableTitleText}>Your Result</h3>

      <GetOutstanding />
    </div>
  )
}

export default OustandingResult