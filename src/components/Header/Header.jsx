import React from "react"
import {useHistory} from "react-router-dom"

import barIcon from "../../assets/headerIcons/bars-solid.svg"
import bellIcon from "../../assets/headerIcons/bell.svg"
import helpIcon from "../../assets/headerIcons/help.svg"
import logoutIcon from "../../assets/headerIcons/logout.svg"

import useWindowWidth from "../../hooks/useWindowWidth"
import headerStyles from "./Header.module.css"

const Header = (props) => {
  const handleToggle = () => {
    props.setOpenSideBar(!props.openSideBar)
  }

  const history = useHistory()

  const windowWidth = useWindowWidth()

  const startLogout = () => {
    history.push("/login")
  }

  const goToPage = () => {
    history.push("/help")
  }

  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.containerTwo}>
        {
          windowWidth < 800 ? <img alt="" src={barIcon} onClick={handleToggle} className={headerStyles.bar} /> : <div></div>
        }
        <h3 className={headerStyles.currentPath}>
          {/* If things get complicated, use a switch statement to handle this. */}
          {
            // history.location.pathname.length >= 2 ? history.location.pathname.split("").splice(1,).join("") : "Dashboard"
            history.location.pathname.length >= 2 ? history.location.pathname.split("/")[1] : "Dashboard"
          }
        </h3>
      </div>

      <div className={headerStyles.containerThree}>
        <div className={`${headerStyles.containerFour} ${headerStyles.notificationContainer}`}>
          <img
            alt=""
            src={bellIcon}
            width="25"
            height="25" 
          />
          <div className={headerStyles.notification}><p>23</p></div>
        </div>
        <div className={`${headerStyles.containerFour} ${headerStyles.displayNone}`} onClick={goToPage}>
          <img
            alt=""
            src={helpIcon}
            width="25"
            height="25" 
          />
          <p className={headerStyles.containerThreeText}>Help</p>
        </div>
        <div className={`${headerStyles.containerFour} ${headerStyles.displayNone}`} onClick={startLogout}>
          <img
            alt=""
            src={logoutIcon}
            width="25"
            height="25" 
          />
          <p className={headerStyles.containerLogoutText}>Logout</p>
        </div>
      </div>
    </header>
  )
}

export default Header