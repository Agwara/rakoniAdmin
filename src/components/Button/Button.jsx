import React from "react";

import buttonStyles from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.action} className={buttonStyles.btn}>
      {props.name}
    </button>
  )
}

export default Button
