import React, { PropTypes } from "react"
//import cx from "classnames"

//import styles from "./index.scss"

const Button = ({...otherProps }) => (
  <span
    role="button"
    { ...otherProps }
    className="button"
  />
)

Button.propTypes = {
  children: PropTypes.node
}

Button.displayName = "Button"

export default Button
