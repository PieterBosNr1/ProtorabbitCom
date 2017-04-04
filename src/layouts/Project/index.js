import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"

import  { Link } from "phenomic"

const Project = (props, { collection }) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null

  //const projectEntries = enhanceCollection(collection, {
  //  filter: {  __url:/projects\/project1\/*/}
  //})

  const projectEntries = enhanceCollection(collection, {
    filter: {  __url:RegExp(`${props.__url}*[0-9A-Za-z]`)}
  })



  return (
    <Page
      { ...props }
      header={
        <div>
          <p>Project Header{props.head.title}</p>
          <p>Project Header{props.__url}</p>
          <header className="header">
            {
              pageDate &&
              <time key={ pageDate.toISOString() }>
                { pageDate.toDateString() }
              </time>
            }
          </header>
        </div>
      }
    > 
      <hr /> 
     {
          projectEntries.map((projectEntry) => (
            <div>
              
            <h4 key={ projectEntry.__url }>{projectEntry.title}</h4>
            <p>{projectEntry.description}</p>
            <Link to={ projectEntry.__url}>TEST</Link>
            </div>
          ))
        }
    </Page>
  )
}

Project.propTypes = {
  head: PropTypes.object.isRequired,
  __url:PropTypes.string
}

Project.contextTypes = {
  collection: PropTypes.array.isRequired,
}
export default Project
