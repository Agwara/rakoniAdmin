import React from "react"
import { Route  } from "react-router-dom"

import SetCountDown from "../../components/AdminPortal/SetCountDown/Index"  
import FeeStructure from "../../components/AdminPortal/FeeStructure/Index"
import HideShowResult from "../../components/AdminPortal/HideShowResult/Index"
import Announcement from "../../components/AdminPortal/Announcement/Announcement"
import ResultUpload from "../../components/AdminPortal/ResultUpload/Index"


const AdminPortal = () => (
  <>
    <Route path="/admin-portal/announcement" component={Announcement} />
    <Route path="/admin-portal/count-down" component={SetCountDown} />
    <Route path="/admin-portal/fee-structure" component={FeeStructure} />
    <Route path="/admin-portal/result" component={HideShowResult} />
    <Route path="/admin-portal/result-upload" component={ResultUpload} />
  </>
)

export default AdminPortal