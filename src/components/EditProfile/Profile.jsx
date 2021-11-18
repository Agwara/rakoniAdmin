import React, {useState} from "react"

import Button from "../Button/Button"
import TextField from "../InputFields/TextField/TextField"

import styles from "./Profile.module.css"

const Profile = () => {
  const [firstName, setFirstName] = useState("Alonso")
  const [lastName, setLastName] = useState("Xabi")
  const [email, setEmail] = useState("xabialonso@gmail.com")
  const [phone, setPhone] = useState("09065908614")
  const [address, setAddress] = useState("Block 23A, Ixtapa Avenue, Mexico")
  const [nim, setNim] = useState("9892673490910")

  const startSave = () => {

  }

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <TextField
          label="First name"
          type="text"
          value={firstName}
          setValue={setFirstName}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Last name"
          type="text"
          value={lastName}
          setValue={setLastName}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Email"
          type="text"
          value={email}
          setValue={setEmail}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Phone Number"
          type="number"
          value={phone}
          setValue={setPhone}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="Address"
          type="text"
          value={address}
          setValue={setAddress}
        />
      </div>

      <div className={styles.input}>
        <TextField
          label="NIM"
          type="number"
          value={nim}
          setValue={setNim}
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

export default Profile