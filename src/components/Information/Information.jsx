import React from "react"

import informationStyles from "./Information.module.css"

const Information = () => {

  return (
    <div className={informationStyles.container}>
      <p className={informationStyles.text}>
        Got any registration issue? Can't find a course? Need unblocking for reselection? Course form amendment issue? etc.
        The Registration officer are there for you, your department registration officer is &nbsp;
        <span className={informationStyles.officer}>Vladimir Kramnik</span>
      </p>
      <div className={informationStyles.imageContainer}>
      </div>
    </div>
  )
}

export default Information