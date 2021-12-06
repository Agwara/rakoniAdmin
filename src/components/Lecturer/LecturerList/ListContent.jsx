import React from "react"

import styles from "./stylesTwo.module.css"

const ListContent = (props) => {

  const ListItem = (props) => (
    <div className={styles.lecturerItem} style={{backgroundColor: props.bg}}>
      <p className={`${styles.elementText} ${styles.paddingLeft}`}>{props.id + 1}</p>
      <p className={styles.elementText}>{props.data.fullName}</p>
      <p className={styles.elementText}>{props.data.userID}</p>
      <p className={styles.elementText}>{props.data.deparment}</p>
      <p className={styles.elementText}>{props.data.email}</p>
      <p className={styles.elementText}>{props.data.phone}</p>
      <p className={styles.elementText}>{props.data.role}</p>
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.testTwo}>
        <div className={styles.headerContainer}>
          <p className={`${styles.headerText} ${styles.paddingLeft}`}>S/N</p>
          <p className={styles.headerText}>Full Name</p>
          <p className={styles.headerText}>User ID</p>
          <p className={styles.headerText}>Department</p>
          <p className={styles.headerText}>Email</p>
          <p className={styles.headerText}>Phone</p>
          <p className={styles.headerText}>Roles</p>
        </div>

        {
          props.data.map((data, id) => {
            if (((id + 1) % 2) === 0) {
              return <ListItem bg="#FAFAFA" key={id} data={data} id={id}/>
            } else {
              return <ListItem bg="#FFFFFF" key={id} data={data} id={id} />
            }
          })
        }
      </div>
    </div>
  )
}

export default ListContent


{/*
    {
    "fullName": "Zenedine Zidane",
    "userID": "Zizou",
    "deparment": "Art",
    "email": "zizouzidane@gmail.com",
    "phone": "09076546542",
    "role": "Docter" 
  }, 
*/}