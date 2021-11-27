import React, {useState, useEffect, useReducer} from "react"

import PageInfo from "../../PageInfo/PageInfo"
import SearchItem from "../../SearchItem/SearchItem"
import Loading from "../../Loading/Loading"
import ShowData from "../ShowData/index"
import Modal from "./Modal"

import studentImage from "../../../assets/pageInfo/student.svg"

import reducer from "../reducer"

import styles from "./styles.module.css"


const initialState = {
  fetchState: "pending",
  startFetch: false,
  fetchData: []
}

const ActivateDeactivate = () => {
  const [studentID, setStudentID] = useState(IdFromServer[0])

  const [resultState, dispatch] = useReducer(reducer, initialState)

  const [mounted, setMounted] = useState(true)

  const [showModal, setShowModal] = useState(false)

  const fakeAxios = () => {
    if (mounted) {
      dispatch({
        type: "FETCH_COMPLETE",
        payload: [...IdFromServer]
      })
    }
  }

  const startFindResult = () => {
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
      <PageInfo infoText="Activate / Deactivate" sideImage={studentImage} />

      <SearchItem 
        data={IdFromServer} 
        btnText="Call Up Record"  
        value={studentID}
        titleText={"Enter Student ID"}
        setValue={setStudentID}
        action={startFindResult}
      />

      { resultState.fetchState === "loading" ? <Loading /> : <div></div> }

      { 
        resultState.fetchState === "loaded" ? 
        <ShowData 
          resultState={resultState} 
          btnColor="red"
          btnIcon=""
          btnText="Deactivate"
          setShowModal={setShowModal}
        /> 
        : <div></div> 
      }

      { showModal ? <Modal setShowModal={setShowModal} btnText="Deactivate" /> : <div></div>}
    </div>
  )
}

export default ActivateDeactivate

const IdFromServer = [
  "STA/12/2021", "STA/09/2022", "MTH/12/2021", "ENG/09/2022", "PHY/09/2022", "CHM/12/2021", "BIO/09/2022"
]