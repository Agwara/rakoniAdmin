import React, {useState} from "react"

import PageInfo from "../../PageInfo/PageInfo"
import ListContent from "./ListContent"
import EditFeeStructure from "./EditFeeStructure"
import Modal from "./Modal"
import cashIcon from "../../../assets/pageInfo/cash.svg"
import styles from "./styles.module.css"


const FeeStructure = () => {
  const [showEdit, setShowEdit] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleEdit = () => {
    setShowEdit(true)
  }

  const cancelUpdate = () => {
    setShowEdit(false)
  }

  return (
    <div className={styles.container}>
      <PageInfo infoText="Fee Structure" sideImage={cashIcon} />

      {
        showEdit ?
        <EditFeeStructure cancelUpdate={cancelUpdate} setShowModal={setShowModal} /> :
        <>
          <div className={styles.containerTwo}>
            <h3 className={styles.headerText}>Fees for  Indigene and Non-Indigene</h3>

            <button onClick={handleEdit} className={styles.btn}>Edit fee</button>
          </div>

          <ListContent />
        </>
      }

    { showModal ? <Modal setShowModal={setShowModal} btnText="Update" /> : <div></div>}
    </div>
  )
}

export default FeeStructure