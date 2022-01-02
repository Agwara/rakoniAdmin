import React, {useState} from "react"

import styles from "./editFee.module.css"

const EditFeeStructure = (props) => {

  const [engIndigeneFee, setEngIndigeneFee] = useState(20000)
  const [engNonIndigeneFee, setEngNonIndigeneFee] = useState(25000)

  const [sciIndigeneFee, setSciIndigeneFee] = useState(20000)
  const [sciNonIndigeneFee, setSciNonIndigeneFee] = useState(25000)

  const [agrIndigeneFee, setAgrIndigeneFee] = useState(20000)
  const [agrNonIndigeneFee, setAgrNonIndigeneFee] = useState(25000)

  const [mngIndigeneFee, setMngIndigeneFee] = useState(20000)
  const [mngNonIndigeneFee, setMngNonIndigeneFee] = useState(25000)

  const cancelUpdate = () => {
    props.cancelUpdate()
  }


  const startUpdate = () => {
    props.setShowModal(true)
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.headerText}>Update Fees for  Indigene and Non-Indigene</h3>


      <div className={styles.containerTwo}>
        <div className={styles.containerThree}>
          <p></p>
          <p style={{alignSelf: "flex-end"}} className={styles.gridText}>Indigene</p>
          <p style={{alignSelf: "flex-end"}} className={styles.gridText}>Non-Indigene</p>
          <p style={{alignSelf: "flex-end"}} className={styles.gridText}>Engineering</p>

          <input
            value={engIndigeneFee}
            onChange={(e) => setEngIndigeneFee(e.target.value)}
            className={styles.gridInput}
            type="number"
          />
          
          <input
            value={engNonIndigeneFee}
            onChange={(e) => setEngNonIndigeneFee(e.target.value)}
            className={styles.gridInput}
            type="number"
          />
          <p style={{alignSelf: "flex-end"}} className={styles.gridText}>Sciences</p>
          
          <input
            value={sciIndigeneFee}
            onChange={(e) => setSciIndigeneFee(e.target.value)}
            className={styles.gridInput}
            type="number"
          />
          
          <input
            value={sciNonIndigeneFee}
            onChange={(e) => setSciNonIndigeneFee(e.target.value)}
            className={styles.gridInput}
            type="number"
          />

          <p style={{alignSelf: "flex-end"}} className={styles.gridText}>Agriculture</p>

          <input
            value={agrIndigeneFee}
            onChange={(e) => setAgrIndigeneFee(e.target.value)}
            className={styles.gridInput}
            type="number"
          />

          <input
            value={agrNonIndigeneFee}
            onChange={(e) => setAgrNonIndigeneFee(e.target.value)}
            className={styles.gridInput}
            type="number"
          />
          <p style={{alignSelf: "flex-end"}} className={styles.gridText}>Management</p>
          <input
            value={mngIndigeneFee}
            onChange={(e) => setMngIndigeneFee(e.target.value)}
            className={styles.gridInput}
            type="number"
          />

          <input
            value={mngNonIndigeneFee}
            onChange={(e) => setMngNonIndigeneFee(e.target.value)}
            className={styles.gridInput}
            type="number"
          />
          <button className={styles.cancelBtn} onClick={cancelUpdate}>
            Cancel
          </button>
          <div className={styles.btnContainer}>
            <button onClick={startUpdate} className={styles.gridBtn}>Update Fees</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditFeeStructure