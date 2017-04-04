import React, { PropTypes } from "react"

import Page from "../Page"
import LatestProjects from "../../components/LatestProjects"


const Projects = (props) => {
  //const test = props.head.title == "" ? (<h1>YES</h1>) : (<h1>NO</h1>) ;
   const getPost = () => {
    if(props.head.showPost == 'Y')
    {
      //return (<LatestPosts/>);
      return (<h1>List of projects</h1>);
    }
    else {
       return (<h1>NO</h1>);
    }
  }
  const myHeader = () =>  (
  <div>
    <h1>Main Projects page</h1>
    <h1>This is my first page {props.head.title}</h1>
  </div>
  )

  return (
    <Page { ...props } header={myHeader()}>
      <hr/>
      <p>the bottom of the projects page !!{props.head.showPost}</p>
      {getPost()}
      <LatestProjects/>
    </Page>
  ) 
}


Projects.propTypes = {
  head: PropTypes.object.isRequired
}

export default Projects
