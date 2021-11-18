export default function reducer(state, action) {
  switch (action.type) {
    case "OPEN_RESULT_DROP_DOWN": 
      return {
        ...state,
        openResultDropDown: action.payload,
        useMainUrl: action.useMain,
        openRegDropDown: false,
        openPrintDropDown: false,
        openGpaDropDown: false,
        openDocDropDown: false 
      }
    
    case "OPEN_REG_DROP_DOWN":
      return {
        ...state,
        openResultDropDown: false,
        openRegDropDown: action.payload,
        useMainUrl: action.useMain,
        openPrintDropDown: false,
        openGpaDropDown: false,
        openDocDropDown: false 
      }

    case "OPEN_PRINT_DROP_DOWN":
      return {
        ...state,
        openResultDropDown: false,
        openRegDropDown: false,
        openPrintDropDown: action.payload,
        useMainUrl: action.useMain,
        openGpaDropDown: false,
        openDocDropDown: false 
      }

    case "OPEN_GPA_DROP_DOWN":
      return {
        ...state,
        openResultDropDown: false,
        openRegDropDown: false,
        openPrintDropDown: false,
        useMainUrl: action.useMain,
        openGpaDropDown: action.payload,
        openDocDropDown: false 
      }

    case "OPEN_DOC_DROP_DOWN":
      return {
        ...state,
        openResultDropDown: false,
        openRegDropDown: false,
        openPrintDropDown: false,
        openGpaDropDown: false,
        openDocDropDown: action.payload,
        useMainUrl: action.useMain, 
      }

     default: 
      return state; 
  }
}