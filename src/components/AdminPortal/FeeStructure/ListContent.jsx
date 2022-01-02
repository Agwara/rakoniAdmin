import React from "react"

import styles from "./stylesTwo.module.css"

const ListContent = () => {

  const ListItem = (props) => (
    <div className={styles.lecturerItem} style={{backgroundColor: props.bg}}>
      <p className={`${styles.elementText} ${styles.paddingLeft}`}>{props.id + 1}</p>
      <p className={styles.elementText}>{props.data.name}</p>
      <p className={styles.elementText}>{props.data.indigene}</p>
      <p className={styles.elementText}>{props.data.nonIndigene}</p>
    </div>
  )

  return (
    <div className={styles.container}>
      <div className={styles.testTwo}>
        <div className={styles.headerContainer}>
          <p className={`${styles.headerText} ${styles.paddingLeft}`}>S/N</p>
          <p className={styles.headerText}>Faculty</p>
          <p className={styles.headerText}>Indigene</p>
          <p className={styles.headerText}>Non-Indigene</p>
        </div>

        {
          faclutyList.map((data, id) => {
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

const faclutyList = [
  {
    "name": "Engineering",
    "indigene": "20000",
    "nonIndigene": "25000"
  },

  {
    "name": "Sciences",
    "indigene": "20000",
    "nonIndigene": "25000"
  },

  {
    "name": "Agriculture",
    "indigene": "20000",
    "nonIndigene": "25000"
  },

  {
    "name": "Management",
    "indigene": "20000",
    "nonIndigene": "25000"
  }
]

export default ListContent
