import React from "react"

import { useDispatch, useSelector } from 'react-redux'
import { addCourse, removeCourse } from "../../features/registeredCourses/registeredCourseSlice"

import styles from "./styles.module.css"

const CourseItem = (props) => {

  const dispatch = useDispatch()
  
  const registeredCourses = useSelector(state => state.registeredCourses)
  
  const itemChecked = registeredCourses.find((course) => course["courseCode"] === props.course["courseCode"])

  const handleAddCourse = () => {
    dispatch(addCourse({...props.course}))
  }

  const handleRemoveCourse = () => {
    dispatch(removeCourse({...props.course}))
  }

  return (
    <div style={{backgroundColor: props.bg}} className={styles.courseItem}>
      <div className={`${styles.checkboxContainer} ${styles.paddingLeft}`}>
        {
          itemChecked ? ( props.showCheckbox ? <div className={styles.checked} onClick={handleRemoveCourse}></div> :
            ""
            )
            : 
            ( props.showCheckbox ? <div className={styles.unchecked} onClick={handleAddCourse}></div> :
            ""
            )
        }
        <p style={{color: props.textColor}} className={styles.courseItemText}>{props.course["courseCode"]}</p>
      </div>
      <p style={{color: props.textColor}} className={`${styles.courseItemText}`}>{props.course["department"]}</p>
      <p style={{color: props.textColor}} className={`${styles.courseItemText}`}>{props.course["courseTitle"]}</p>
      <p style={{color: props.textColor}} className={`${styles.courseItemText} ${styles.smallPaddingLeft}`}>{props.course["unit"]}</p>
      <p style={{color: props.textColor}} className={`${styles.courseItemText} ${styles.smallPaddingLeft}`}>{props.course["semester"]}</p>
      <p style={{color: props.textColor}} className={`${styles.courseItemText} ${styles.smallPaddingLeft}`}>{props.course["level"]}</p> 
    </div>
  )
}

export default CourseItem