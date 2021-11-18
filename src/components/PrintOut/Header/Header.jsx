import React from "react"

import test from "../../../assets/otherIcons/printoutHeader.svg"

import styles from "./styles.module.css"

const Header = (props) => {

  return (
    <div className={styles.headerContainer}>
      <div className={styles.textContainer}>
        {
          props.title === "Print Out" ? <p className={styles.printout}>Print Out</p> : 
          <>
            <p className={styles.headerTextOne}>Course Form</p>
            <p className={styles.headerTextTwo}>First semester for 2020-2021 academic session </p>
          </>
        }
      </div>

      <div className={styles.imageContainer}>
        <img
          alt=""
          src={test} 
          height="80"
          width="80"
        />
      </div>
    </div>
  )
}

export default Header