import React from "react" 

import Greeting from "../../components/Greeting/Greeting"
import QuickInfo from "../../components/QuickInfo/QuickInfo"
import LecturerQuickAccess from "../../components/QuickAccess/LectureQuickAccess/Index"
import StudentQuickAccess from "../../components/QuickAccess/StudentQuickAccess/Index"
import dashboardStyles from "./Dashboard.module.css"

const Dashboard = (props) => {
  return (
    <div className={dashboardStyles.container}>
      <Greeting />

      <QuickInfo />
      
      <StudentQuickAccess 
        setStartToggle={props.setStartToggle} 
      />

      <LecturerQuickAccess 
        setStartToggle={props.setStartToggle} 
      />
    </div>
  )
}

export default Dashboard