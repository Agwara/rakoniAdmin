import React, {useState} from "react"

import Current from "../../components/PrintOut/Current/Current"
import Previous from "../../components/PrintOut/Previous/Previous"

import styles from "./styles.module.css"

const PrintOut = (props) => {
  const [printoutPage, setPrintoutPage] = useState(props.match.url.split("/")[2])  
  return (
    <div className={styles.container}>
      {
        printoutPage === "current-semester" ? <Current/> : <Previous/>
      }
    </div>
  )
}

export default PrintOut