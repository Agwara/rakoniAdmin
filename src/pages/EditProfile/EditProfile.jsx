import React, {useState} from "react"

import Media from "../../components/EditProfile/Media"
import Password from "../../components/EditProfile/Password"
import Profile from "../../components/EditProfile/Profile"

import styles from "./EditProfile.module.css"


const EditProfile = () => {
  const [editNav, setEditNav] = useState("profile")

  const handleNavChange = (params) => {
    setEditNav(params)
  }

  const renderUI = () => {
    switch (editNav) {
      case "profile": 
        return <Profile />
      case "media":
        return <Media />  
      case "password":
        return <Password />
      default: 
        return <Profile />    
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ul className={styles.nav}>
          <li onClick={() => handleNavChange("profile")} className={editNav === "profile" ? styles.active : styles.inActive}>Profile</li>
          <li onClick={() => handleNavChange("password")} className={editNav === "password" ? styles.active : styles.inActive}>Password</li>
          <li onClick={() => handleNavChange("media")} className={editNav === "media" ? styles.active : styles.inActive}>Media</li>
        </ul>

        <div className={styles.containerTwo}>
          {renderUI()}
        </div>

      </div>

    </div>
  )
}

export default EditProfile