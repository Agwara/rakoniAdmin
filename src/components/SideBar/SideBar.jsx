import React, {useReducer} from "react"
import {useHistory} from "react-router-dom"

import reducer from "./sideBarReducer"

import StudentIcon from "../../assets/sidebarIcons/studentIcon"

import crossIcon from "../../assets/sidebarIcons/cross-mark.svg"
import DashboardIcon from "../../assets/sidebarIcons/dashboard"
import SettingsIcon from "../../assets/sidebarIcons/settings"

import LecturerIcon from "../../assets/sidebarIcons/lecturer"
import AdminIcon from "../../assets/sidebarIcons/admin"
import DocumentIcon from "../../assets/sidebarIcons/document"
import RightArrow from "../../assets/sidebarIcons/rightArrow"

import styles from "./SideBar.module.css"

import helpIcon from "../../assets/sidebarIcons/help.svg"
import logoutIcon from "../../assets/sidebarIcons/logout.svg"
import plusIcon from "../../assets/sidebarIcons/plusIcon.svg"

const initialState = {
  openResultDropDown: false,
  openRegDropDown: false,
  openPrintDropDown: false,
  openGpaDropDown: false,
  openDocDropDown: false,
  useMainUrl: true
}

const SideBar = (props) => {
  const [sideBarState, dispatch] = useReducer(reducer, initialState)

  const toggleResultDropDown = () => {
    dispatch({
      type: "OPEN_RESULT_DROP_DOWN",
      payload: !sideBarState.openResultDropDown,
      useMain: !sideBarState.openResultDropDown ? false : true
    })
  }

  const toggleRegDropDown = () => {
    dispatch({
      type: "OPEN_REG_DROP_DOWN",
      payload: !sideBarState.openRegDropDown,
      useMain: !sideBarState.openRegDropDown ? false : true
    })
  }

  const togglePrintDropDown = () => {
    dispatch({
      type: "OPEN_PRINT_DROP_DOWN",
      payload: !sideBarState.openPrintDropDown,
      useMain: !sideBarState.openPrintDropDown ? false : true
    })
  }


  const toggleDocDropDown = () => {
    dispatch({
      type: "OPEN_DOC_DROP_DOWN",
      payload: !sideBarState.openDocDropDown,
      useMain: !sideBarState.openDocDropDown ? false : true
    })
  }

  const history = useHistory()

  const handleToggle = () => {
    props.setOpenSideBar(!props.openSideBar)
    props.setStartToggle(true)
  }

  const handleUrlChange =  (url) =>{
    history.push(`/${url}`)
    props.setOpenSideBar(false)
    props.setStartToggle(true)
  }

  const startLogout = () => {
    history.push("/login")
  }

  const stopPropagation = (e, url) => {
    e.stopPropagation() 
    if (url) {
      handleUrlChange(url)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerTwo}>
        <h3 className={styles.containerTwoText}>UNIGIG</h3>
        <img
          alt=""
          src={crossIcon} 
          onClick={handleToggle} 
          className={styles.cross}
        />
      </div>

      <div className={styles.createAccountDiv}>
        <img
          alt=""
          src={plusIcon} 
        />

        <p className={styles.createAccountText}>Create Account</p>
      </div>

      <ul className={styles.nav}>
        <li           className={history.location.pathname === "/" && sideBarState.useMainUrl ? styles.active : styles.inactive}
          onClick={() => handleUrlChange("")}
        >
          {
            history.location.pathname === "/" && sideBarState.useMainUrl ? <DashboardIcon color={"#DF8A09"}/> : <DashboardIcon color={"white"} />
          }
          <p>Dashboard</p>
        </li>

        <li 
          onClick={toggleResultDropDown}
          className={styles.itemContainer}
        >
          <div className={sideBarState.openResultDropDown ? styles.active : styles.inactive}>
            {
              sideBarState.openResultDropDown ? <StudentIcon color={"#DF8A09"}/> : <StudentIcon color={"white"} />
            }
            <p>Student</p>

            <div className={styles.rightArrow}>
              {sideBarState.openResultDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openResultDropDown ? styles.test : styles.close}>
            <div className={styles.testInner}>
              <p 
                onClick={(e) => stopPropagation(e)} 
                className={styles.innerLinkText}
              >
                Result
              </p>
              <p 
                onClick={(e) => stopPropagation(e)} 
                className={styles.innerLinkText}
              >
                Oustanding
              </p>
            </div>
          </div>
        </li>

        <li 
          onClick={toggleRegDropDown}
          className={styles.itemContainer}
        >
          <div className={sideBarState.openRegDropDown ? styles.active : styles.inactive}>
            {
              sideBarState.openRegDropDown ? <LecturerIcon color={"#DF8A09"}/> : <LecturerIcon color={"white"} />
            }
            <p>Lecturer</p>

            <div className={styles.rightArrow}>
              {sideBarState.openRegDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openRegDropDown ? styles.test : styles.close}>
            <div className={styles.testInner}>
              <p onClick={(e) => stopPropagation(e)} className={styles.innerLinkText}>Selected course</p>
              <p onClick={(e) => stopPropagation(e)} className={styles.innerLinkText}>Course form</p>
            </div>
          </div>
        </li>

        <li 
          onClick={togglePrintDropDown}
          className={styles.itemContainer}
        >
          <div className={sideBarState.openPrintDropDown ? styles.active : styles.inactive}>
            {
              sideBarState.openPrintDropDown ? <AdminIcon color={"#DF8A09"}/> : <AdminIcon color={"white"} />
            }
            <p>Administrative Portal</p>
            <div className={styles.rightArrow}>
              {sideBarState.openPrintDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openPrintDropDown ? styles.test : styles.close}>
            <div className={styles.testInner}>
              <p onClick={(e) => stopPropagation(e)} className={styles.innerLinkText}>Current semester</p>
              <p onClick={(e) => stopPropagation(e)} className={styles.innerLinkText}>Previous semester</p>
            </div>
          </div>
        </li>

        <li 
          onClick={toggleDocDropDown}
          className={styles.itemContainer}
        >
          <div className={sideBarState.openDocDropDown ? styles.active : styles.inactive}>
            {
              sideBarState.openDocDropDown ? <DocumentIcon color={"#DF8A09"}/> : <DocumentIcon color={"white"} />
            }
            <p>Master Sheet</p>
            <div className={styles.rightArrow}>
              {sideBarState.openDocDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openDocDropDown ? styles.test : styles.close}>
            <div className={styles.testInner}>
              <p onClick={(e) => stopPropagation(e)} className={styles.innerLinkText}>Course document</p>
              <p onClick={(e) => stopPropagation(e)} className={styles.innerLinkText}>Upload</p>
            </div>
          </div>
        </li>


        <li 
          className={history.location.pathname === "/profile" && sideBarState.useMainUrl ? styles.active : styles.inactive}
        >
          {
            history.location.pathname === "/profile" && sideBarState.useMainUrl ? <SettingsIcon color={"#DF8A09"}/> : <SettingsIcon color={"white"} />
          }
          <p>Settings</p>
        </li>
      </ul>

      <div className={styles.containerThree}>
        <div className={styles.helpContainer} onClick={() => handleUrlChange("help")}>
          <img
            alt=""
            src={helpIcon} 
            className={styles.help}
            height="20"
            width="20"
          />
          <p>Help</p>
        </div>

        <div onClick={startLogout} className={styles.logoutContainer}>
          <img
            alt=""
            src={logoutIcon} 
            className={styles.help}
            height="20"
            width="20"
          />
          <p>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default SideBar;