import React from "react" 

import Greeting from "../../components/Greeting/Greeting"
import Information from "../../components/Information/Information"
import QuickAccess from "../../components/QuickAccess/QuickAccess"
import dashboardStyles from "./Dashboard.module.css"

const Dashboard = (props) => {
  return (
    <div className={dashboardStyles.container}>
      <Greeting />

      <Information />

      <QuickAccess 
        setStartToggle={props.setStartToggle} 
      />
    </div>
  )
}

export default Dashboard