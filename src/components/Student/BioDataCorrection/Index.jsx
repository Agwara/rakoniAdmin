import React, {useState, useEffect, useReducer} from "react"

import PageInfo from "../../PageInfo/PageInfo"
import SearchItem from "../../SearchItem/SearchItem"
import Loading from "../../Loading/Loading"
import ShowData from "../ShowData/index"
import UpdateForm from "./UpdateForm"
import Modal from "./Modal"

import bioData from "../../../assets/pageInfo/biodata.svg"

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

  const [showUpdateForm, setShowUpdateForm] = useState(false)
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
    }, 1500)
  } 

  const startUpdate = () => {
    dispatch({type: "FETCH_START"})
    setShowUpdateForm(false)

    setTimeout(() => {
      dispatch({type: "STOP_LOADING"})
      setShowModal(true)
    }, 1500)
  }

  useEffect(() => {
    return () => {
      setMounted(false)
    }
  }, [])

  const cancelUpdate = () => {
    setShowUpdateForm()
  }

  return (
    <div className={styles.container}>
      <PageInfo infoText="Biodata Correction" sideImage={bioData} />

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
          btnColor="green"
          btnIcon=""
          btnText="Update Biodata"
          setShowModal={setShowUpdateForm}
        /> 
        : <div></div> 
      }

      {showUpdateForm ? <UpdateForm startUpdate={startUpdate} cancelUpdate={cancelUpdate} /> : <div></div>}

      { showModal ? <Modal /> : <div></div>}

    </div>
  )
}

export default ActivateDeactivate

const IdFromServer = [
  "STA/12/2021", "STA/09/2022", "MTH/12/2021", "ENG/09/2022", "PHY/09/2022", "CHM/12/2021", "BIO/09/2022"
]