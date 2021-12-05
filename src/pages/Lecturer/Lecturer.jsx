import React from "react"
import { Route  } from "react-router-dom"

import LecturerList from "../../components/Lecturer/LecturerList/Index"


const Lecturer = () => (
  <>
  <Route path="/lecturer/lecturer-list" component={LecturerList} />
</>
)

export default Lecturer