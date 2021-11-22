export default function reducer(state, action) {
  switch (action.type) {
    case "OPEN_STUDENT_DROP_DOWN": 
      return {
        ...state,
        openStudentDropDown: action.payload,
        useMainUrl: action.useMain,
        openLecDropDown: false,
        openPortalDropDown: false,
        openMasterDropDown: false 
      }
    
    case "OPEN_LEC_DROP_DOWN":
      return {
        ...state,
        openStudentDropDown: false,
        openLecDropDown: action.payload,
        useMainUrl: action.useMain,
        openPortalDropDown: false,
        openMasterDropDown: false 
      }

    case "OPEN_PORTAL_DROP_DOWN":
      return {
        ...state,
        openStudentDropDown: false,
        openLecDropDown: false,
        openPortalDropDown: action.payload,
        useMainUrl: action.useMain,
        openMasterDropDown: false 
      }

    case "OPEN_MASTER_DROP_DOWN":
      return {
        ...state,
        openStudentDropDown: false,
        openLecDropDown: false,
        openPortalDropDown: false,
        openMasterDropDown: action.payload,
        useMainUrl: action.useMain, 
      }

     default: 
      return state; 
  }
}