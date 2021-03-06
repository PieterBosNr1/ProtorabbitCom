import React, { PropTypes } from "react"

import "./index.global.scss"
import "./highlight.global.scss"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
//import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"

const AppContainer = (props) => (
  <Container>
    <DefaultHeadMeta />
 
    <Content>
      { props.children }
    </Content>
    <Footer />
  </Container>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer

// <Container>
//    <DefaultHeadMeta />
//    <Header {...props} test="deze" />
//    <Content>
//      { props.children }
//    </Content>
//    <Footer />
//  </Container>