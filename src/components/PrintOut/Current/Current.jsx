import React, {useRef} from "react"
import { useReactToPrint } from 'react-to-print';

import Header from "../Header/Header"
import CourseForm from "./CourseForm"

import styles from "./styles.module.css"

const Current = () => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.courseFormContainer}>
        <CourseForm ref={componentRef} />

        <div className={styles.buttons}>
          <button className={`${styles.buttonItems} ${styles.buttonGreyColor}`}>Send to mail</button>
          <button className={`${styles.buttonItems} ${styles.buttonGreyColor}`} onClick={handlePrint}>Download PDF / Print</button>
        </div>
      </div>
    </div>
  )
}

export default Current