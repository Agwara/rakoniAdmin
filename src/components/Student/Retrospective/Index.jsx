import React, {useState, useEffect} from "react"

import PageInfo from "../../PageInfo/PageInfo"
import DropDown from "../../InputFields/DropDown/DropDown"
import Button from "../../Button/Button"
import Loading from "../../Loading/Loading"
import Modal from "./Modal"
import retro from "../../../assets/pageInfo/retro.svg"

import styles from "./styles.module.css"

const Retrospective = () => {
  const [semester, setSemester] = useState(semesters[0])
  const [csvFile, setCSVFile] = useState(null)
  const [uploadError, setUploadError] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const upload = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setShowModal(true)
    }, 2000)
  }

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let uploadCourseFile = event.target.files[0]

      let lastString = uploadCourseFile.name.substring(uploadCourseFile.name.length - 3)
      
      if (lastString !== "csv") {
        setUploadError(true)
        setCSVFile(null)
      } else {
        setCSVFile(uploadCourseFile)
        setUploadError(false)
      }
    }
  }


  return (
    <div className={styles.container}>
      <PageInfo showRetro={true} infoText="Activate / Deactivate" sideImage={retro} />

      <h3 className={styles.subHeadText}>Upload student registration</h3>

      <div className={styles.formContainer}>
        <div className={styles.formField}>
          <DropDown value={semester} setValue={setSemester} label="Select Semester" data={semesters} />
        </div>

        <div className={styles.uploadContainer}>
          {uploadError ? <p className={styles.error}>Please select a CSV File</p> : <p></p>}
          <label htmlFor="uploadFile" className={styles.descriptionLabel}>Upload CSV File</label>

          <div className={styles.uploadContainerTwo}>
            <p className={styles.uploadName}>{csvFile ? csvFile.name : "Upload file"}</p>

            <div className={styles.uploadInputContainer}>
              <input id="upLoadFile" type="file" onChange={handleFileChange} className={styles.uploadInput} />
              <button className={styles.uploadBtn}>Upload</button>
            </div>
          </div>
        </div>

        <div className={styles.btn}>
          <Button name="Upload registration" action={upload} />
        </div>
      </div>

      {loading ? <Loading /> : <div></div>}

      {showModal ? <Modal /> : <div></div>}
    </div>
  )
}

const semesters = [
  "1st semester 2020-2021",
  "1st semester 2019-2020",
  "1st semester 2018-2019",
  "1st semester 2017-2018",
  "1st semester 2016-2017",
  "1st semester 2015-2016",
  
]

export default Retrospective