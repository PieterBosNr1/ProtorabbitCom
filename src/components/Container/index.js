import React, { PropTypes } from "react"

import styles from "./index.scss"

const Container = (props) => (
  <div className={ styles.container }>
    
    { props.children }
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
  props: PropTypes.object
}

export default Container
