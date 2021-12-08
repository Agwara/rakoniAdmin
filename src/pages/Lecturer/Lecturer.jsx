import React from "react"
import { Route  } from "react-router-dom"

import LecturerList from "../../components/Lecturer/LecturerList/Index"
import ActivateDeactivate from "../../components/Lecturer/ActivateDeactivate/Index" 
import ResetQuota from "../../components/Lecturer/ResetQuota/index"
import BioDataCorrection from "../../components/Lecturer/BioDataCorrection/Index"
import ResetPassword from "../../components/Lecturer/ResetPassword/Index"

const Lecturer = () => (
  <>
  <Route path="/lecturer/lecturer-list" component={LecturerList} />
  <Route path="/lecturer/activate-deactivate" component={ActivateDeactivate} />
  <Route path="/lecturer/reset-quota" component={ResetQuota} />
  <Route path="/lecturer/bio-data-correction" component={BioDataCorrection} />
  <Route path="/lecturer/reset-password" component={ResetPassword} />
  </>
)

export default Lecturer