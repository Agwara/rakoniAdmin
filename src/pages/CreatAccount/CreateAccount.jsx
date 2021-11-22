import React from "react"

import PageInfo from "../../components/PageInfo/PageInfo"
import FormDetails from "../../components/CreateAccount/FormDetails/FormDetails"

import createAccountIcon  from "../../assets/pageInfo/createAccount.svg"

import styles from "./styles.module.css"

const CreateAccount = () => {
  return (
    <div className={styles.container}>
      <PageInfo sideImage={createAccountIcon} infoText="Create an Account" />

      <h3 className={styles.headerTwo}>Enter details information</h3>

      <FormDetails />
    </div>
  )
}

export default CreateAccount