import React from "react"
import CourseItem from "../../CourseItem/CourseItem"

import styles from "./styles.module.css"

class CourseFormList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderUiState = () => {
    if (this.props.loadingState === "loading") {
      return (
        <div className={styles.loadingAnimation}>
          <h3>Loading Data...</h3>
          <div className={styles.loader}></div>
        </div>
      )
    } else if (this.props.loadingState === "error") {
      return (
        <div className={styles.errorInLoading}>

        </div>
      ) 
    } else if (this.props.loadingState === "success") {
      return (
        <div className={styles.resultItems}>
          {
            carryOverCourses.map((course, i) => {
              if (((i + 1) % 2) === 0) {
                return <CourseItem 
                  key={`${i}`} bg="#FAFAFA" 
                  course={course} 
                  showCheckbox={false}
                  textColor="red"
                />
              } else {
                return <CourseItem 
                  key={`${i}`} 
                  bg="#FFFFFF" 
                  course={course}
                  showCheckbox={false}
                  textColor="red"
                />
              }
            })
          }

          { 
            this.props.tempCourse.map((course, i) => {
              if (((i + 1) % 2) === 0) {
                return <CourseItem 
                  key={`${i}`} bg="#FAFAFA" 
                  course={course} 
                  showCheckbox={true}
                  textColor="#787878"
                />
              } else {
                return <CourseItem 
                  key={`${i}`} 
                  bg="#FFFFFF" 
                  course={course}
                  showCheckbox={true}
                  textColor="#787878"
                />
              }
            })
          }
          <div className={styles.totalUnitSection}>
            <p className={styles.totalUnitText}>Total Unit</p>

            <p className={styles.totalUnitValue}>{this.props.totalUnits}</p>
          </div>
        </div>

      )
    }
  }

  render () {
    return (
      <div>
        <div className={styles.resultHeader}>
          <p className={`${styles.tableHeaderText} ${styles.paddingLeft}`}>Course Code</p>
          <p className={styles.tableHeaderText}>Department</p>
          <p className={styles.tableHeaderText}>Course Title</p>
          <p className={styles.tableHeaderText}>Unit</p>
          <p className={styles.tableHeaderText}>Semester</p>
          <p className={styles.tableHeaderText}>Level</p>
        </div>
        
        {this.renderUiState()}
      </div>
    )
  }
}

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

export default CourseFormList