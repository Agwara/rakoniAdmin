import React, {useState, useEffect, useRef} from "react"
import { useReactToPrint } from 'react-to-print';

import {useSelector} from "react-redux"

import CourseFormList from "./CourseFormList"
import Button from "../../Button/Button"
import Modal from "./Modal"

import printerIcon from "../../../assets/otherIcons/printout.svg"

import styles from "./styles.module.css"

const CourseForm = () => {

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  const [loadingState, setLoadingState] = useState("loading")

  const [ showModal, setShowModal] = useState(false)

  const [tempCourse, setTempCourse] = useState([])
  
  const [mounted, setMounted] = useState(true)

  const registeredCourses = useSelector(state => state.registeredCourses)

  function getSum(total, course) {
    return total + course["unit"];
  }

  const normalUnits = useSelector(state => state.registeredCourses.reduce(getSum, 0))
  const carryOverUnits = carryOverCourses.reduce(getSum, 0)

  const totalUnits = normalUnits + carryOverUnits

  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        setLoadingState("success")
      }, 2000)
    }

    return () => {
      setMounted(false)
    }
  })

  useEffect(() => {
    setTempCourse([...registeredCourses])
  }, [])

  const goToCourseForm = () => {
    setShowModal(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.getResult}>

        <CourseFormList 
          loadingState={loadingState}
          totalUnits={totalUnits}
          tempCourse={tempCourse}
          ref={componentRef}
        />

        <div className={styles.courseForm}>
          <div className={styles.btnContainer}>
            <Button 
              action={goToCourseForm}
              name ="Submit course form"
            />
          </div>

          <div className={styles.printCourse} onClick={handlePrint}>
            <img
              alt=""
              src={printerIcon} 
            />
            <p className={styles.printCourseText}>Print course form</p>
          </div>
        </div>
      </div>

      {
        showModal ? <Modal setShowModal={setShowModal} /> : ""
      }
    </div>
  )
}

export default CourseForm

const carryOverCourses = [
  {
    "courseCode": "STA 111",
    "department": "Statistics",
    "courseTitle": "Introduction to statistics and maths",
    "unit": 4,
    "semester": "First",
    "level": 100
  },

  {
    "courseCode": "PHY 203",
    "department": "Biology",
    "courseTitle": "Introduction to biology",
    "unit": 3,
    "semester": "First",
    "level": 100
  }
]