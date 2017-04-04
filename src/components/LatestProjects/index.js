import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

//import styles from "./index.scss"

const defaultNumberOfPosts = 6

const LatestProjects = (props, { collection }) => {
  const projects = enhanceCollection(collection, {
    filter: { layout: "Project" }
  })
  .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <div>
      <h2>
        { "Latest Projects" }
      </h2>
      <PagesList pages={ projects } />
    </div>
  )
}

LatestProjects.propTypes = {
  numberOfPosts: PropTypes.number,
}

LatestProjects.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestProjects
