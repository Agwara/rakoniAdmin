import React, {useState} from "react"

import PageInfo from "../../PageInfo/PageInfo"
import Preview from "./Preview"
import MessageSett from "./MessageSett"
import speaker from "../../../assets/pageInfo/speaker.svg"

import styles from "./styles.module.css"

const Announcement = () => {
  const [recipient, setRecipient] = useState("All Students")
  const [announcementMsg, setAnnouncementMsg] = useState("")

  const [showMsgSett, setShowMsgSett] = useState(true)


  const handleSubmit = () => {
    setShowMsgSett(false)
  }

  const cancelSubmit = () => {
    setShowMsgSett(true)
  }

  return (
    <div className={styles.container}>
      <PageInfo infoText="Public Service Annoucement" sideImage={speaker} />

      {
        showMsgSett ? 
        <MessageSett 
          handleSubmit={handleSubmit} 
          recipient={recipient} 
          setRecipient={setRecipient} 
          announcementMsg={announcementMsg}
          setAnnouncementMsg={setAnnouncementMsg}
        /> 
        : <Preview cancelSubmit={cancelSubmit} recipient={recipient} announcementMsg={announcementMsg} />
      }

      
    </div>
  )
}

export default Announcement
