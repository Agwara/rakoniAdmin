import React from "react"
import { Route  } from "react-router-dom"

import ActivateDeactivate from "../../components/Student/ActivateDeactivate/index"
import BlockUnblock from "../../components/Student/BlockUnblock/index"
import ResetPassword from "../../components/Student/ResetPassword/Index"
import BioDataCorrection from "../../components/Student/BioDataCorrection/Index"
import Retrospective from "../../components/Student/Retrospective/Index"
import LateReg from "../../components/Student/LateReg/Index"

const Student = () => {
  return (
    <>
      <Route path="/student/retrospective-reg" component={Retrospective} />
      <Route path="/student/activate-deactivate" component={ActivateDeactivate} />
      <Route path="/student/block-unblock" component={BlockUnblock} />
      <Route path="/student/late-registration" component={LateReg} />
      <Route path="/student/reset-password" component={ResetPassword} />
      <Route path="/student/bio-data-correction" component={BioDataCorrection} />
    </>
  )
}

export default Student

