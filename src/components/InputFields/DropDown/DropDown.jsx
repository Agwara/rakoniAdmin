import React from "react"

import dropDownStyles from "./DropDown.module.css"

const DropDown = (props) => {
  const handleChange = (e) => {
    props.setValue(e.target.value)
  }

  return (
    <div className={dropDownStyles.container}>
      <label className={dropDownStyles.label}>{props.label}</label>

      <select className={dropDownStyles.select} value={props.value} onChange={handleChange}>
        {props.data.map((element, key) => 
          <option value={element} key={`${element}${key}`}>{element}</option>
        )}
      </select>
    </div>
  )
}

export default DropDown