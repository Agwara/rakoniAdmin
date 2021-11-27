import React from "react"

import Button from "../Button/Button"

import styles from "./styles.module.css"

const SearchItem = (props) => {

  const handleAction = () => {
    props.action()
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.titleText}>{props.titleText}</h3>
      <div className={styles.containerTwo}>
        <div className={styles.dropDown}>
          <select 
            className={styles.select} 
            value={props.value} 
            onChange={(e) => props.setValue(e.target.value)}
          >
            {props.data.map((element, key) => 
              <option className={styles.optionText} value={element} key={`${element}${key}`}>{element}</option>
            )}
          </select>
        </div>

        <div className={styles.btn}>
          <Button
            name={props.btnText} 
            action={handleAction}
          />
        </div>
      </div>
    </div> 
  )
}

export default SearchItem