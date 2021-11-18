export default function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START": 
      return {
        ...state,
        startFetch: true,
        fetchState: "loading"
      }
    
    case "FETCH_COMPLETE":
      return {
        ...state,
        fetchState: "loaded",
        startFetch: true,
        courseFiles: [...action.payload]
      }
    case "FETCH_ERROR":
      return {
        ...state,
        fetchState: "error",
        startFetch: true,
        courseFiles: []
      }  

    case "FETCH_CANCEL": 
      return {
        ...state,
        startFetch: false,
        courseFiles: [],
        fetchState: "loading"
      }   

     default: 
      return state; 
  }
}