import React, {useState, useEffect, useReducer} from "react"

import Information from "../../components/Information/Information"
import Button from "../../components/Button/Button"
import GetResult from "../../components/GetResult/GetResult"

import reducer from "./reducer"

import styles from "./Result.module.css"

const initialState = {
  fetchState: "loading",
  startFetch: false,
  fetchCourses: []
}

const Result = () => {
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
      <Information />

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
        resultState.startFetch ? <h3 className={styles.tableTitleText}>Your Result</h3> :  <div></div>
      }
      
      {
        resultState.startFetch ? 
          <GetResult 
            studentCourses={studentCourses}
            fetchResultState={resultState.fetchState}
            fetchedCourses={resultState.fetchCourses}
          /> : 
          <div></div>
      }
    </div>
  )
}

export default Result;
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
      "score": 60,
      "grade": "B",
      "point": 16
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "score": 60,
      "grade": "B",
      "point": 16
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "score": 60,
      "grade": "B",
      "point": 16
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "score": 60,
      "grade": "B",
      "point": 16
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "score": 60,
      "grade": "B",
      "point": 16
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "score": 60,
      "grade": "B",
      "point": 16
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "score": 60,
      "grade": "B",
      "point": 16
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "score": 60,
      "grade": "B",
      "point": 16
    },

    {
      "courseCode": "STA 101",
      "department": "Statistics",
      "courseTitle": "Introduction to statistics and maths",
      "unit": 4,
      "score": 60,
      "grade": "B",
      "point": 16
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