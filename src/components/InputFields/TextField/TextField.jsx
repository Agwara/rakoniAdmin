import React, {useState} from "react"

import textFieldStyles from "./TextField.module.css"

const TextField = (props) => {
  const [inputType, setInput] = useState(props.type)
  const validateInput = () => {
  }

  const renderShowPassword = () => {
    if (props.type === "password") {
      return inputType === "password" ? <p className={textFieldStyles.showPassword} onClick={() => setInput("text")}>Show</p> :
      <p className={textFieldStyles.showPassword} onClick={() => setInput("password")}>Hide</p>
    }
  }

  return (
    <div className={textFieldStyles.container}>
      <label className={textFieldStyles.label}>{props.label}</label>
      <input
        type={inputType}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        onBlur={(e) => validateInput()}
        className={textFieldStyles.input}
      />

      {
        renderShowPassword()
      }
    </div>
  )
}

export default TextField