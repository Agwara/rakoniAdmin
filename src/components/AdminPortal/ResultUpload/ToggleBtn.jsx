import React from "react"

import styles from "./toggle.module.css"

const ToggleBtn = (props) => {

  const { selected, toggleSelected } = props

  return (
    <div className={selected ? `${styles.toggleContainerActive}` : `${styles.toggleContainer}`} onClick={toggleSelected}>
      <div className={ selected ? `${styles.dialogButton}` : `${styles.disabled} ${styles.dialogButton}`}>
      </div>
    </div>
    )
}

export default ToggleBtn
