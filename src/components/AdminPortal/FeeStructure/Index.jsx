import React from "react"

import PageInfo from "../../PageInfo/PageInfo"
import cashIcon from "../../../assets/pageInfo/cash.svg"
import styles from "./styles.module.css"


const FeeStructure = () => {
  return (
    <div className={styles.container}>
      <PageInfo infoText="Fee Structure" sideImage={cashIcon} />
    </div>
  )
}

export default FeeStructure