import React, {useState} from "react"

import Button from "../Button/Button"
import TextField from "../InputFields/TextField/TextField"
import styles from "./Password.module.css"

const Password = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [reEnter, setReEnter] = useState("")


  const startSave = () => {

  }

  
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <TextField
          label="Old password"
          type="password"
          value={oldPassword}
          setValue={setOldPassword}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="New password"
          type="password"
          value={newPassword}
          setValue={setNewPassword}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Re-enter New password"
          type="password"
          value={reEnter}
          setValue={setReEnter}
        />
      </div>

      <div className={styles.btn}>
        <Button
          name="Save" 
          action={startSave}
        />
      </div>

    </div>
  )
}

export default Password