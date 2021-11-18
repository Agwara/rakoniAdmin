import React, {useState} from "react"

import Button from "../Button/Button"
import TextField from "../InputFields/TextField/TextField"

import imageOne from "../../assets/help/imageOne.png"
import imageTwo from "../../assets/help/imageTwo.png"
import imageThree from "../../assets/help/imageThree.png"
import styles from "./SubmitTicket.module.css"

const SubmitTicket = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const startSubmit = () => {
    
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Submit a ticket</h3>

      <div className={styles.containerTwo}>
        <div className={styles.imageContainer}>
          <img src={imageOne} alt="" className={styles.imageOne} />
          <img src={imageTwo} alt="" className={styles.imageTwo} />
          <img src={imageThree} alt="" className={styles.imageThree} />
        </div>

        <div className={styles.formContainer}>
          <div className={styles.fullName}>
            <TextField
              label="Full Name"
              type="text"
              value={fullName}
              setValue={setFullName}
            />
          </div>
          <div className={styles.formContainerTwo}>
            <div className={styles.email}>
              <TextField
                label="Email"
                type="text"
                value={email}
                setValue={setEmail}
              />
            </div>
            <div className={styles.phone}>
              <TextField
                label="Phone"
                type="number"
                value={phone}
                setValue={setPhone}
              />
            </div>
          </div>
          <div className={styles.message}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea 
              name="message" 
              id="message" cols="30" 
              rows="10" 
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
          </div>
          
          <div className={styles.btn}>
            <Button
              name="Submit" 
              action={startSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitTicket