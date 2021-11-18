import React, {useState, useEffect, useReducer} from "react"

import Button from "../../Button/Button"
import DownloadFilesList from "./DownloadFilesList"
import reducer from "./reducer"

import styles from "./styles.module.css"

const initialState = {
  fetchState: "loading",
  startFetch: false,
  courseFiles: []
}

const Download = () => {
  const [selectedCourse, setSelectedcourse] = useState(dowwnloadableCourseFiles[0])

  const [resultState, dispatch] = useReducer(reducer, initialState)

  const [mounted, setMounted] = useState(true)

  console.log(resultState.courseFiles)

  const fakeAxios = () => {
    if (mounted) {
      dispatch({
        type: "FETCH_COMPLETE",
        payload: [...courseFilesFromSerever[selectedCourse]]
      })
    }
  } 

  const findFiles = () => {
    dispatch({type: "FETCH_START"})
    
    setTimeout(() => {
      fakeAxios()
    }, 2000)
  }


  useEffect(() => {
    return () => {
      setMounted(false)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.containerTwo}>
        <h3 className={styles.titleText}>Select academic year</h3>
        <div className={styles.containerThree}>
          <div className={styles.dropDown}>
          <select 
            className={styles.select} 
            value={selectedCourse} 
            onChange={(e) => setSelectedcourse(e.target.value)}
          >
            {dowwnloadableCourseFiles.map((element, key) => 
              <option className={styles.optionText} value={element} key={`${element}${key}`}>{element}</option>
            )}
          </select>
          </div>

          <div className={styles.btn}>
            <Button
              name="Search" 
              action={findFiles}
            />
          </div>
        </div>
      </div> 

      { resultState.startFetch ? <h3 className={styles.tableTitleText}>Course Documents</h3> : <div></div>}
      
      {
        resultState.startFetch ? 
          <DownloadFilesList 
            fetchResultState={resultState.fetchState}
            courseFiles={[...resultState.courseFiles]}
          /> : 
          <div></div>
      }
    </div>
  )
}

const dowwnloadableCourseFiles = [
  "CSC 201", "MTH 201", "COE 304", "ECE 400", "STA 401"
]

const courseFilesFromSerever = {
  "CSC 201": [
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },    
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },   
    {
      "Date": "03/04/2021",
      "CourseCode": "MTH 201",
      "DocumentTitle": "Algebra",
      "Link": "www.hdioe.com/arkman.pdf" 
    },
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },    
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    }
  ],

  "MTH 201": [
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },    
    {
      "Date": "03/04/2021",
      "CourseCode": "MTH 201",
      "DocumentTitle": "Algebra",
      "Link": "www.hdioe.com/arkman.pdf" 
    },
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },    
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    }
  ],

  "COE 304": [
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },    
    {
      "Date": "03/04/2021",
      "CourseCode": "MTH 201",
      "DocumentTitle": "Algebra",
      "Link": "www.hdioe.com/arkman.pdf" 
    },
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },    
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    }
  ],

  "ECE 400": [
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },    
    {
      "Date": "03/04/2021",
      "CourseCode": "MTH 201",
      "DocumentTitle": "Algebra",
      "Link": "www.hdioe.com/arkman.pdf" 
    },
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },    
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    }
  ],

  "STA 400": [
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },    
    {
      "Date": "03/04/2021",
      "CourseCode": "MTH 201",
      "DocumentTitle": "Algebra",
      "Link": "www.hdioe.com/arkman.pdf" 
    },
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    },    
    {
      "Date": "03/04/2021",
      "CourseCode": "CSC 201",
      "DocumentTitle": "Algorithm",
      "Link": "www.hdioe.com/inception.pdf" 
    }
  ]
}

export default Download