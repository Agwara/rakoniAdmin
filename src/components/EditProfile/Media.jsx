import React, {useState} from "react"

import Button from "../Button/Button"
import student from "../../assets/profile/student.png"
import signature from "../../assets/profile/signature.png"
import cross from "../../assets/profile/cross.svg"

import styles from "./Media.module.css"

const Media = () => {
  const [profileImage, setProfileImage] = useState(student)
  const [signatureImage, setSignatureImage] = useState(signature)

  const [profileFile, setProfileFile] = useState(student)
  const [signatureFile, setSignatureFile] = useState(signature)


  const onProfileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setProfileImage(URL.createObjectURL(img))
      setProfileFile(img)
    }
  }

  const onSignatureChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setSignatureImage(URL.createObjectURL(img))
      setSignatureFile(img)
    }
  }

  const startSave = () => {

  }

  return (
    <div className={styles.container}>
      <div className={styles.containerTwo}>
        <div className={styles.imageContainer}>
          <p className={styles.text}>Profile Picture</p>

          <div className={styles.containerThree}>
            <input
              type="file"
              className={styles.input} 
              onChange={onProfileChange}
            />
            <img
              alt="" 
              src={profileImage}
              className={styles.img}
            />

            <img
              alt=""
              src={cross}
              className={styles.cross} 
            />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <p className={styles.text}>Student Signature</p>
          <div className={styles.containerThree}>
            <input
              type="file"
              className={styles.input} 
              onChange={onSignatureChange}
            />
            <img
              alt="" 
              src={signatureImage}
              className={styles.img}
            />

            <img
              alt=""
              src={cross}
              className={styles.cross} 
            />
          </div>
        </div>
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

export default Media