import React, {useState, useEffect} from "react"

import PageInfo from "../../PageInfo/PageInfo"
import ToggleBtn from "./ToggleBtn"

import styles from "./styles.module.css"

const Index = () => {
  const [allSelected, setAllSelected] = useState(false)
  const [engSelected, setEngSelected] = useState(false)
  const [sciSelected, setSciSelected] = useState(false)
  const [envSelected, setEnvSelected] = useState(false)
  const [agrSelected, setAgrSelected] = useState(false)

  const handleSelectAll = () => {
    setAgrSelected(true)
    setEngSelected(true)
    setSciSelected(true)
    setEnvSelected(true)
  }

  const setAllFalse = () => {
    setAgrSelected(false)
    setEngSelected(false)
    setSciSelected(false)
    setEnvSelected(false)
  }

  useEffect(() => {
    if (allSelected) {
      handleSelectAll()
    } else {
      setAllFalse()
    }
  }, [allSelected])

  return (
    <div className={styles.container}>
      <PageInfo infoText="Hide / Show Student Result" />

      <div style={{marginBottom: "20px"}}></div>

      <div className={styles.containerTwo}>
        <div className={styles.innerContainer}>
          <p className={styles.innerText}>Show all faculty results</p>

          <ToggleBtn
            selected={allSelected}
            toggleSelected={() => {
              setAllSelected(!allSelected);
            }}
          />
        </div>
      </div>

      <div className={styles.containerThree}>
        <div className={styles.innerContainer}>
          <p className={styles.innerText}>Engineering</p>

          <ToggleBtn
            selected={engSelected}
            toggleSelected={() => {
              setEngSelected(!engSelected);
            }}
          />
        </div>

        <div className={styles.innerContainer}>
          <p className={styles.innerText}>Sciences</p>

          <ToggleBtn
            selected={sciSelected}
            toggleSelected={() => {
              setSciSelected(!sciSelected);
            }}
          />
        </div>


        <div className={styles.innerContainer}>
          <p className={styles.innerText}>Environmental</p>

          <ToggleBtn
            selected={envSelected}
            toggleSelected={() => {
              setEnvSelected(!envSelected);
            }}
          />
        </div>

        <div className={styles.innerContainer}>
          <p className={styles.innerText}>Show all faculty results</p>

          <ToggleBtn
            selected={agrSelected}
            toggleSelected={() => {
              setAgrSelected(!agrSelected);
            }}
          />
        </div>

        <div className={styles.btn}>

        </div>
      </div>
    </div>
  )
}

export default Index