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
  openStudentDropDown: false,
  openLecDropDown: false,
  openPortalDropDown: false,
  openMasterDropDown: false,
  useMainUrl: true
}

const SideBar = (props) => {
  const [sideBarState, dispatch] = useReducer(reducer, initialState)

  const toggleStudentDropDown = () => {
    dispatch({
      type: "OPEN_STUDENT_DROP_DOWN",
      payload: !sideBarState.openStudentDropDown,
      useMain: !sideBarState.openStudentDropDown ? false : true
    })
  }

  const toggleRegDropDown = () => {
    dispatch({
      type: "OPEN_LEC_DROP_DOWN",
      payload: !sideBarState.openLecDropDown,
      useMain: !sideBarState.openLecDropDown ? false : true
    })
  }

  const togglePrintDropDown = () => {
    dispatch({
      type: "OPEN_PORTAL_DROP_DOWN",
      payload: !sideBarState.openPortalDropDown,
      useMain: !sideBarState.openPortalDropDown ? false : true
    })
  }


  const toggleDocDropDown = () => {
    dispatch({
      type: "OPEN_MASTER_DROP_DOWN",
      payload: !sideBarState.openMasterDropDown,
      useMain: !sideBarState.openMasterDropDown ? false : true
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

      <div className={styles.createAccountDiv} onClick={() => handleUrlChange("create-account")}>
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
          onClick={toggleStudentDropDown}
          className={styles.itemContainer}
        >
          <div className={sideBarState.openStudentDropDown ? styles.active : styles.inactive}>
            {
              sideBarState.openStudentDropDown ? <StudentIcon color={"#DF8A09"}/> : <StudentIcon color={"white"} />
            }
            <p>Student</p>

            <div className={styles.rightArrow}>
              {sideBarState.openStudentDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openStudentDropDown ? styles.test : styles.close}>
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
          <div className={sideBarState.openLecDropDown ? styles.active : styles.inactive}>
            {
              sideBarState.openLecDropDown ? <LecturerIcon color={"#DF8A09"}/> : <LecturerIcon color={"white"} />
            }
            <p>Lecturer</p>

            <div className={styles.rightArrow}>
              {sideBarState.openLecDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openLecDropDown ? styles.test : styles.close}>
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
          <div className={sideBarState.openPortalDropDown ? styles.active : styles.inactive}>
            {
              sideBarState.openPortalDropDown ? <AdminIcon color={"#DF8A09"}/> : <AdminIcon color={"white"} />
            }
            <p>Administrative Portal</p>
            <div className={styles.rightArrow}>
              {sideBarState.openPortalDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openPortalDropDown ? styles.test : styles.close}>
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
          <div className={sideBarState.openMasterDropDown ? styles.active : styles.inactive}>
            {
              sideBarState.openMasterDropDown ? <DocumentIcon color={"#DF8A09"}/> : <DocumentIcon color={"white"} />
            }
            <p>Master Sheet</p>
            <div className={styles.rightArrow}>
              {sideBarState.openMasterDropDown ? <RightArrow color={"#DF8A09"}/> : <RightArrow color={"white"} />}
            </div>
          </div>

          <div className={sideBarState.openMasterDropDown ? styles.test : styles.close}>
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