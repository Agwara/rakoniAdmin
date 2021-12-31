import React, {useState, useEffect} from "react"
import { defaultEqualityCheck } from "reselect"

import styles from "./styles.module.css"

const ShowCountDown = (props) => {

  const [daysHtml, setDaysHtml] = useState(0)
  const [hoursHtml, setHoursHtml] = useState(0)
  const [minutesHtml, setMinutesHtml] = useState(0)
  const [secondsHtml, setSecondsHtml] = useState(0)

  function startCountDown () {

    let now = new Date().getTime();

    let distance = new Date(`${new Date(props.dateValue).toString().slice(3, 15)} ${props.hourValue}:${props.minutesValue}:00`) - now

    setDaysHtml(Math.floor(distance / (1000 * 60 * 60 * 24)))
    setHoursHtml(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setMinutesHtml(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setSecondsHtml(Math.floor((distance % (1000 * 60)) / 1000))
  } 

  useEffect(() => {
    const myInterval = setInterval(startCountDown, 1000)

    return () => {
      clearInterval(myInterval)
    }
  }, [])

  return (
    <div className={styles.container}>

      <div className={styles.timerContainer}>
        <p className={styles.timerTitle}>Days</p> 

        <div className={styles.timerbg}>
          <p className={styles.timertxt}>{daysHtml}</p>
        </div>
      </div>

      <div className={styles.timerContainer}>
        <p className={styles.timerTitle}>Hours</p> 

        <div className={styles.timerbg}>
          <p className={styles.timertxt}>{hoursHtml}</p>
        </div>

        {/* <div className={styles.timerColon}>
          <div className={styles.colonDot}></div>  
          <div className={styles.colonDot}></div>          
        </div> */}
      </div>

      <div className={styles.timerContainer}>
        <p className={styles.timerTitle}>Minutes</p>

        <div className={styles.timerbg}>
          <p className={styles.timertxt}>{minutesHtml}</p>
        </div>

        {/* <div className={styles.timerColon}>
          <div className={styles.colonDot}></div>  
          <div className={styles.colonDot}></div> 
        </div> */}
      </div>

      <div className={styles.timerContainer}>
        <p className={styles.timerTitle}>Seconds</p>

        <div className={styles.timerbg}>
          <p className={styles.timertxt}>{secondsHtml}</p>
        </div>
        
      </div>
    </div>
  )
}

export default ShowCountDown