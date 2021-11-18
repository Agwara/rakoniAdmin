import React from "react"

import SubmitTicket from "../../components/SubmitTicket/SubmitTicket"
import group793 from "../../assets/help/Group793.svg" 
import styles from "./Help.module.css"

const Help = () => {
  return (
    <div className={styles.container}>
      <div className={styles.helpDesk}>
        <h3>Student Help Desk</h3>
        <img
          alt=""
          src={group793}
          className={styles.helpGroupIcon} 
        />
      </div>
      <div className={styles.instructions}>
        <h4 className={styles.header}>PLEASE FOLLOW THIS REGISTRATION STEPS FOR THE CURRENT SEMESTER</h4>

        <ul className={styles.instructionsList}>
          <li>
            <p className={styles.steps}>Step 1</p>
            <p className={styles.instructionText}>
              REMITA: approch any of the Banks for school fee, mention you want to pay your school fees 
              (exclusive bank charges) on REMITA Make sure the payer name is in same order as your fullname
              on simportal. this step will grant access to your course registration, you may now proceed to
              course registration
            </p>
          </li>
          <li>
            <p className={styles.steps}>Step 2</p>
            <p className={styles.instructionText}>
              Click on SELECTED COURSE via which you will select the course you are taking for the semester, then
              click on Transfer to course form button at the end of the list
            </p>
          </li>
          <li>
            <p className={styles.steps}>Step 3</p>
            <p className={styles.instructionText}>
              Click on COURSE FORM to view view your earlier selected course: Preview for repetitions. When satisfied
              with your selection, click on the FINAL SUBMIT button to submit your course form
            </p>
          </li>
          <li>
            <p className={styles.steps}>Step 4</p>
            <p className={styles.instructionText}>
              Click on PRINT COURSEFORM on the menu to print a copy of course form (of click on the GET PDF VERSION 
              to gat a copy).
            </p>
          </li>
        </ul>
      </div>
      
      <SubmitTicket />
    </div>
  )
}

export default Help