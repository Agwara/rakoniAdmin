import React, {useState} from "react"

import DropDown from "../../InputFields/DropDown/DropDown"

import styles from "./styles.module.css"

const Upload = () => {
  const [selectedCourse, setSelectedCourse] = useState(courseCodes[0])
  const [description, setDescription] = useState("")
  const [courseFile, setCourseFile] = useState(null)

  const handleTextAreaChange = (e) => {
    setDescription(e.target.value)
  }

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let uploadCourseFile = event.target.files[0]

      setCourseFile(uploadCourseFile)
    }
  }
  
  return (
    <div className={styles.container}>
      <h3 className={styles.headerText}>Upload document for assessment</h3>

      <div className={styles.containerTwo}>
        <div className={styles.dropDownContainer}>
          <DropDown
            data={courseCodes}
            label="Select Course"
            value={selectedCourse}
            setValue={setSelectedCourse}
          />
        </div>

        <div className={styles.descriptionContainer}>
          <label htmlFor="uploadDescription" className={styles.descriptionLabel}>Description</label>

          <textarea 
            type="textarea"
            className={styles.descriptionText} 
            id="uploadDescription" value={description} 
            onChange={handleTextAreaChange}
          >
          </textarea>

        </div>

        <div className={styles.uploadContainer}>
          <label htmlFor="uploadFile" className={styles.descriptionLabel}>Upload Documents</label>

          <div className={styles.uploadContainerTwo}>
            <p className={styles.uploadName}>{courseFile ? courseFile.name : "Select a file"}</p>

            <div className={styles.uploadInputContainer}>
              <input id="upLoadFile" type="file" onChange={handleFileChange} className={styles.uploadInput} />
              <button className={styles.uploadBtn}>Upload</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

const courseCodes = [
  "STA 101", "MTH 203", "ECE 304", "PHY 400", "BIO 211"
]

export default Upload
