import React from "react"

import styles from "./CourseTimeTable.module.css"

const CourseTimeTable = () => {

  const hours = () => {
    return (
      <div className={styles.hours}>
        <div className={styles.hoursItem}>8:00</div>
        <div className={styles.hoursItem}>9:00</div>
        <div className={styles.hoursItem}>10:00</div>
        <div className={styles.hoursItem}>11:00</div>
        <div className={styles.hoursItem}>12:00</div>
        <div className={styles.hoursItem}>13:00</div>
      </div>
    )
  }

  let empArr = () => {
    let testArr = []
    for (let i = 0; i <= 36; i++) {
      testArr.push(i)
    }
    return testArr
  }

  const courses = () => {
    return (
      <div className={styles.courses}>
        {
          empArr().map((number, i) => {
            if (generatePosition()[number]) {
              let obj = generatePosition()[number]
              let startRow = Number(obj["row"])
              let endRow = startRow + Number(obj["duration"])
  
              let startColumn = Number(obj["column"])
              let endColumn = startColumn + 1
              return (
                <div 
                  key={`${obj["course"]} ${i}`}
                  style={
                    {
                      gridColumn: `${Number(startColumn)}/${Number(endColumn)}`,
                      gridRow: `${Number(startRow)}/${(Number(endRow))}`
                    }
                  }
                  className={`${styles.coursePos} ${styles.boxBorder}`}
                
                >
                  <p className={styles.courseInfo}>{obj["course"]}</p>
                  <p className={styles.lectureRoom}>{obj["building"]}</p>
                </div>
              )
            } else {
              return (
                <div key={number} className={styles.boxBorder}></div>
              )
            }
          })
        }
      </div>
    )
  }

  const generatePosition = () => {
    let courseList = []

    Object.keys(timeTable).map((item) => {
      let tableColumn = getColumn(item)
      timeTable[item].map((course) => {
        let tableRow = getRow(course["startTime"])
        let courseObj = {...course, "row": Number(tableRow), "column": Number(tableColumn), "day": item}

        courseList.push(courseObj)
        
      })
    })

    return courseList
  }

  const getColumn = (tableDay) => {
    switch (tableDay) {
      case "monday":
        return 1
      case "tuesday":
        return 2
      case "wednesday":
        return 3
      case "thursday":
        return 4 
      case "friday":
        return 5 
      case "saturday":
        return 6      
      default:
        return 1
    }
  }

  const getRow = (startTime) => {
    switch (startTime) {
      case "8:00":
        return 1
      case "9:00":
        return 2  
      case "10:00":
        return 3
      case "11:00":
        return 4 
      case "12:00":
        return 5 
      case "13:00":
        return 6
      default: 
        return 1        
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.test}>
        <div className={styles.testTwo}>
          <ul className={styles.days}>
            <li></li>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
          </ul>

          <div className={styles.timeTable}>
            {hours()}
            {courses()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseTimeTable

const timeTable = {
  "monday": [
    {
      "course": "CSC 202",
      "startTime": "9:00",
      "duration": "2",
      "building": "Big Lecture Room"
    },
    {
      "course": "Math 201",
      "startTime": "11:00",
      "duration": "2",
      "building": "Big Lecture Room"
    },
  ],

  "tuesday": [
    {
      "course": "CSC 202",
      "startTime": "9:00",
      "duration": "2",
      "building": "Big Lecture Room"
    },

    {
      "course": "BIO 227",
      "startTime": "12:00",
      "duration": "2",
      "building": "Big Lecture Room"
    }
  ],

  "wednesday": [
    {
      "course": "MATH 201",
      "startTime": "8:00",
      "duration": "2",
      "building": "Big Lecture Room"
    },

    {
      "course": "PHY 202",
      "startTime": "11:00",
      "duration": "2",
      "building": "Big Lecture Room"
    }
  ],

  "thursday": [
    {
      "course": "ENG 204",
      "startTime": "9:00",
      "duration": "1",
      "building": "Big Lecture Room"
    },
    {
      "course": "MATH 202",
      "startTime": "12:00",
      "duration": "1",
      "building": "Big Lecture Room"
    },
  ],

  "friday": [
    {
      "course": "CSC 202",
      "startTime": "8:00",
      "duration": "2",
      "building": "Big Lecture Room"
    },
    {
      "course": "Math 201",
      "startTime": "11:00",
      "duration": "2",
      "building": "Big Lecture Room"
    },
  ],

  "saturday": [
    {
      "course": "MATH 201",
      "startTime": "8:00",
      "duration": "2",
      "building": "Big Lecture Room"
    },

    {
      "course": "PHY 202",
      "startTime": "11:00",
      "duration": "2",
      "building": "Big Lecture Room"
    }
  ]
}