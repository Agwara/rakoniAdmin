import React, {useState, useEffect, useReducer, useRef} from "react"
import { useReactToPrint } from 'react-to-print';

import Header from "../Header/Header"
import Button from "../../Button/Button"
import ResultList from "./ResultList"

import printerIcon from "../../../assets/otherIcons/printout.svg"

import reducer from "./reducer"

import styles from "./styles.module.css"

const initialState = {
  fetchState: "loading",
  startFetch: false,
  fetchCourses: []
}


const Previous = () => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [selecetedSemester, setSelectedSemester] = useState(availableSemesters[0])

  const [resultState, dispatch] = useReducer(reducer, initialState)

  const [mounted, setMounted] = useState(true)

  const fakeAxios = () => {
    if (mounted) {
      dispatch({
        type: "FETCH_COMPLETE",
        payload: [...studentCourses["courses"]]
      })
    }
  }

  const findResult = () => {
    dispatch({type: "FETCH_START"})
    
    setTimeout(() => {
      fakeAxios()
    }, 2000)
  } 

  useEffect(() => {
    return () => {
      setMounted(false)
    }
  }, [])


  return (
    <div className={styles.container}>
      <Header
        title="Print Out" 
      />

      <div className={styles.containerTwo}>
        <h3 className={styles.titleText}>Select academic year</h3>
        <div className={styles.containerThree}>
          <div className={styles.dropDown}>
          <select 
            className={styles.select} 
            value={selecetedSemester} 
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            {availableSemesters.map((element, key) => 
              <option className={styles.optionText} value={element} key={`${element}${key}`}>{element}</option>
            )}
          </select>
          </div>

          <div className={styles.btn}>
            <Button
              name="Search" 
              action={findResult}
            />
          </div>
        </div>
      </div> 
      
      {
        resultState.startFetch ? 
          <ResultList 
            selecetedSemester={selecetedSemester}
            studentCourses={studentCourses}
            fetchResultState={resultState.fetchState}
            fetchedCourses={resultState.fetchCourses}
            selecetedSemester={selecetedSemester}
            ref={componentRef}
          /> : 
          <div></div>
      }

      {
        resultState.startFetch ?
        <div className={styles.btnContainer}>
          <div className={styles.printBtn} onClick={handlePrint}>
            <img
              alt=""
              src={printerIcon} 
            />
            <p className={styles.printCourseText}>Print course form</p>
          </div>
        </div> :  <div></div>
      }

    </div>
  )
}

export default Previous

const studentCourses = {
  "totalPoints": 120,
  "totalUnits": 20,
  "gpa": 4.25,
  "courses": [
    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "status": "C",
      "semester": "First",
      "level": 100
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "status": "C",
      "semester": "First",
      "level": 100
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "status": "C",
      "semester": "First",
      "level": 100
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "status": "C",
      "semester": "First",
      "level": 100
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "status": "C",
      "semester": "First",
      "level": 100
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "status": "C",
      "semester": "First",
      "level": 100
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "status": "C",
      "semester": "First",
      "level": 100
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "status": "C",
      "semester": "First",
      "level": 100
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "status": "C",
      "semester": "First",
      "level": 100
    }
  ]
}

const availableSemesters = [
  "First Semester 2019 (100 Lvl)",
  "Second Semester 2019 (100 Lvl)",
  "First Semester 2020 (200 Lvl)",
  "Second Semester 2020 (200 Lvl)",
  "First Semester 2021 (300 Lvl)",
  "Second Semester 2021 (300 Lvl)",
  "First Semester 2022 (400 Lvl)",
  "Second Semester 2022 (400 Lvl)"
]