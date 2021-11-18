import { createSlice } from '@reduxjs/toolkit'

const registeredCoursesSlice = createSlice({
  name: 'registeredCourses',
  initialState: [],
  reducers: {
    addCourse (state, action) {
      state.push(action.payload)
    },

    removeCourse (state, action) {
      return state.filter((course) => course["courseCode"] !== action.payload["courseCode"])
    },

    clearRegisteredCourses (state) {
      return state = []
    }
  }
})

export const { addCourse, removeCourse, clearRegisteredCourses } = registeredCoursesSlice.actions

export default registeredCoursesSlice.reducer