import React from "react"
import { Route  } from "react-router-dom"

import ActivateDeactivate from "../../components/Student/ActivateDeactivate/index"
import BlockUnblock from "../../components/Student/BlockUnblock/index"

const Student = () => {
  return (
    <>
      <Route path="/student/activate-deactivate" component={ActivateDeactivate} />
      <Route path="/student/block-unblock" component={BlockUnblock} />
    </>
  )
}

export default Student

