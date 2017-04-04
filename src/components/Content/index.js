import React, { PropTypes } from "react"

//import styles from "./index.scss"

const Content = (props) => (
  <div className="content">
    { props.children }
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
   title: PropTypes.string
}

export default Content
