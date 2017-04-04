import React, { PropTypes } from "react"

import Page from "../Page"

const First = (props) => {
  const myHeader = () =>  (
  <div>
    <h1>My Header 4</h1>
    <h1>This is my first page {props.head.title}</h1>
  </div>
  )

  return (
    <Page { ...props } header={myHeader()}>
      <hr/>
      <p>the bottom of the content</p>
    </Page>
  )
}


First.propTypes = {
  head: PropTypes.object.isRequired
}

export default First
