import React from "react"

import PageInfo from "../../PageInfo/PageInfo"
import speaker from "../../../assets/pageInfo/speaker.svg"

import styles from "./styles.module.css"

const Announcement = () => {
  return (
    <div className={styles.container}>
      <PageInfo infoText="Public Service Annoucement" sideImage={speaker} />
    </div>
  )
}

export default Announcement
