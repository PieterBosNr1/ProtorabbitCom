import React from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <h1>Home</h1>
      <LatestPosts />
    </Page>
  )
}

export default Homepage
