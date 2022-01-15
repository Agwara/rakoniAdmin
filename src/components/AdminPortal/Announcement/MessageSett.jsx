import React from "react"

import DropDown from "../../InputFields/DropDown/DropDown"
import styles from "./messageSett.module.css"

const MessageSett = (props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.headerText}>Announcement Message</h3>

      <div className={styles.containerTwo}>
        <div className={styles.dropDown}>
          <DropDown label="Recipient" data={recipientList} value={props.recipient} setValue={props.setRecipient} />
        </div>

        <div className={styles.inputcContainer}>
          <label className={styles.label}>Announcement</label>
          <textarea
            value={props.announcementMsg}
            onChange={(e) => props.setAnnouncementMsg(e.target.value)}
            className={styles.input}
          >
          </textarea>
        </div>

        <div className={styles.btn} onClick={() => props.handleSubmit()}>
          Submit
        </div>
      </div>
    </div>
  )
}

const recipientList = [
  "All Students", "All Lecturers"
]

export default MessageSett