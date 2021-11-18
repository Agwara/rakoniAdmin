import { configureStore } from '@reduxjs/toolkit'

import registeredCoursesReducer from "../features/registeredCourses/registeredCourseSlice"

export default configureStore({
  reducer: {
    registeredCourses: registeredCoursesReducer
  }
})