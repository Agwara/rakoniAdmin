import React, {useState, useEffect} from "react"

import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

import Loading from "../../Loading/Loading"

import PageInfo from "../../PageInfo/PageInfo"
import ShowCountDown from "../ShowCountdown/ShowCountdown";

import clockImage from "../../../assets/pageInfo/clock.svg"
import arrowDown from "../../../assets/otherIcons/arrowDown.svg"
import styles from "./styles.module.css"
import Modal from "./Modal";

const Index = () => {
  const [showLoading, setShowLoading] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showHours, setShowHours] = useState(false)
  const [showMinutes, setShowMinutes] = useState(false)

  const [dateValue, setDateValue] = useState(new Date())
  const [dateString, setDateString] = useState("")

  const [hourValue, setHourValue] = useState(0)
  const [minutesValue, setMinutesValue] = useState(0)

  const [showError, setShowError] = useState(false)

  const [startCount, setStartCount] = useState(false)

  const [showModal, setShowModal] = useState(false)

  
  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar)
    setShowHours(false)
    setShowMinutes(false)
  }

  const handleHourChange = (hourParam) => {
    setShowHours(false)
    setHourValue(hourParam)
    setStartCount(false)
    setShowError(false)
  }

  const handleMinutesChange = (minsParam) => {
    setShowMinutes(false)
    setMinutesValue(minsParam)
    setStartCount(false)
    setShowError(false)
  }

  const handleShowHours = () => {
    setShowCalendar(false)
    setShowHours(!showHours)
    setShowMinutes(false)
  }

  const handleShowMinutes = () => {
    setShowCalendar(false)
    setShowHours(false)
    setShowMinutes(!showMinutes)
  }

  const handleDateChange = (e) => {
    setStartCount(false)
    setShowCalendar(false)
    setShowError(false)

    let day = new Date(e).getDate()
    let month = new Date(e).getMonth() + 1
    let year = new Date(e).getFullYear()

    setDateString(`${day.toString()} / ${month.toString()} / ${year.toString()}`)

    setDateValue(e)
  }

  const handleInitate = () => {
    let now = new Date().getTime();

    let distance = new Date(`${new Date(dateValue).toString().slice(3, 15)} ${hourValue}:${minutesValue}:00`) - now

    if (distance > 0) {
      setStartCount(true)
      setShowError(false)
    } else {
      setShowError(true)
    }   
  }


  const handleShowModal = () => {
    setShowModal(true)
  }

  const closeCountDown = () => {
    setStartCount(false)
  }

  return (
    <div className={styles.container}>
      <PageInfo infoText="Set Count Down" sideImage={clockImage} />

      {
        showLoading ? <Loading /> : <div></div>
      }

      <div className={styles.containerTwo}>
        <div style={{width: "150px"}} className={`${styles.dropDown} ${styles.containerThree}`}>
          <p className={styles.dropDownTitle}>Calendar</p>
          <div style={{width: "150px"}} className={styles.dateInput} onClick={handleShowCalendar}>
            <p className={styles.dateInputText}>
              {dateString.length > 0 ? dateString : "DD/MM/YYYY" }
            </p>

            <img 
              alt=""
              src={arrowDown}
              height="10"
              width="10"
            />
          </div>

          {
            showCalendar && 
            <div className={styles.calendar}>
              <div className={styles.calendarContainer}>
                <Calendar
                  onChange={handleDateChange}
                  value={dateValue}
                  className={styles.reactCalendar}
                />
              </div> 
            </div>
          }
        </div>

        <div style={{width: "90px"}} className={`${styles.dropDown} ${styles.containerThree}`}>
          <p className={styles.dropDownTitle}>Hour</p>
          <div style={{width: "90px"}} className={styles.dateInput} onClick={handleShowHours}>
            <p className={styles.dateInputText}>
              {hourValue}
            </p>

            <img 
              alt=""
              src={arrowDown}
              height="10"
              width="10"
            />
          </div>

          {
            showHours && 
            <div className={styles.hoursDropDown}>
              <p onClick={() => handleHourChange(0)} className={styles.hourValue}>0</p>
              <p onClick={() => handleHourChange(1)} className={styles.hourValue}>1</p>
              <p onClick={() => handleHourChange(2)} className={styles.hourValue}>2</p>
              <p onClick={() => handleHourChange(3)} className={styles.hourValue}>3</p>
              <p onClick={() => handleHourChange(4)} className={styles.hourValue}>4</p>
              <p onClick={() => handleHourChange(5)} className={styles.hourValue}>5</p>
              <p onClick={() => handleHourChange(6)} className={styles.hourValue}>6</p>
              <p onClick={() => handleHourChange(7)} className={styles.hourValue}>7</p>
              <p onClick={() => handleHourChange(8)} className={styles.hourValue}>8</p>
              <p onClick={() => handleHourChange(9)} className={styles.hourValue}>9</p>
              <p onClick={() => handleHourChange(10)} className={styles.hourValue}>10</p>
              <p onClick={() => handleHourChange(11)} className={styles.hourValue}>11</p>
            </div>
          }
        </div>

        <div style={{width: "90px"}} className={`${styles.dropDown} ${styles.containerThree}`}>
          <p className={styles.dropDownTitle}>Minutes</p>
          <div style={{width: "90px"}} className={styles.dateInput} onClick={handleShowMinutes}>
            <p className={styles.dateInputText}>
              {minutesValue}
            </p>

            <img 
              alt=""
              src={arrowDown}
              height="10"
              width="10"
            />
          </div>

          {
            showMinutes && 
            <div className={styles.hoursDropDown}>
              <p onClick={() => handleMinutesChange(0)} className={styles.hourValue}>0</p>
              <p onClick={() => handleMinutesChange(5)} className={styles.hourValue}>5</p>
              <p onClick={() => handleMinutesChange(10)} className={styles.hourValue}>10</p>
              <p onClick={() => handleMinutesChange(15)} className={styles.hourValue}>15</p>
              <p onClick={() => handleMinutesChange(20)} className={styles.hourValue}>20</p>
              <p onClick={() => handleMinutesChange(25)} className={styles.hourValue}>25</p>
              <p onClick={() => handleMinutesChange(30)} className={styles.hourValue}>30</p>
              <p onClick={() => handleMinutesChange(35)} className={styles.hourValue}>35</p>
              <p onClick={() => handleMinutesChange(40)} className={styles.hourValue}>40</p>
              <p onClick={() => handleMinutesChange(45)} className={styles.hourValue}>45</p>
              <p onClick={() => handleMinutesChange(50)} className={styles.hourValue}>50</p>
              <p onClick={() => handleMinutesChange(55)} className={styles.hourValue}>55</p>
            </div>
          }
        </div>

        <div onClick={handleShowModal} style={{width: "120px"}} className={styles.btn}>Initiate</div>
      </div>

      {
        showError ? <p className={styles.errorMsg}>Please don't choose a time in the past!</p> : ""
      }

      {
        startCount ? 
        <button className={styles.btnDelete} onClick={closeCountDown}>Deactivate</button> : <div></div> 
      }

      {
        startCount ? 
        <ShowCountDown dateValue={dateValue} hourValue={hourValue} minutesValue={minutesValue} /> 
        : <div></div>
      }


      {
        showModal ? <Modal startCountDown={handleInitate} setShowModal={setShowModal} /> : <div></div>
      }
    </div>
  )
}

export default Index