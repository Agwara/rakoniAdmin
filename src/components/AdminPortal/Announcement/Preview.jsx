import React, {useState} from "react"

import Modal from "./Modal"

import styles from "./preview.module.css"

const Preview = (props) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className={styles.container}>
      <h3 className={styles.headerText}>Announcement Message</h3>

      <div className={styles.containerTwo}>
        <div className={styles.sendTo}>
          <p className={styles.textOne}>Send To</p>

          <p className={styles.textTwo}>{props.recipient}</p>
        </div>

        <div className={styles.msgBody}>
          <p className={styles.textOne}>Message Body</p>

          <p className={styles.textMsg}>{props.announcementMsg}</p>
        </div>

        <div className={styles.actionBtns}>
          <div className={styles.editBtn} onClick={props.cancelSubmit}>Edit</div>
          <div className={styles.sendBtn} onClick={() => setShowModal(true)}>Send</div>
        </div>

      </div>

      { showModal ? <Modal setShowModal={setShowModal} btnText="Deactivate" /> : <div></div>}
    </div>
  )
}

export default Preview