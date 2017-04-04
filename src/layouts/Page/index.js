import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri } from "phenomic"

import Header from "../../components/Header"
import Loading from "../../components/Loading"
import Menu from "../../components/Menu"

//import styles from "./index.scss"

const Page = (
  {
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
  {
    metadata: { pkg },
  }
) => {
  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const socialImage = head.hero && head.hero.match("://") ? head.hero
    : joinUri(process.env.PHENOMIC_USER_URL, head.hero)

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:image", content: socialImage },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "twitter:image", content: socialImage },
    { name: "description", content: head.description },
  ]

  return (
    <div >

      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      <Header {...head} test="deze" />
      <Menu/>

      <div className="row hero">
          <div className="columns small-12 hero__background "  style={ head.hero && {
          background: `#111 url(${ head.hero }) 50% 50% / cover`,
        } } >  
            <h1 className="hero__title">{ head.title }--- d</h1>
          </div>
      </div>

      <div className="row">
        { header }
        <div className="columns small-12">
          {
            isLoading
            ? <Loading />
            : <BodyContainer>{ body }</BodyContainer>
          }
        </div>
        <div className="row">
          <div className="columns small-12">
          { children }
          </div>
        </div>
        { footer }
      </div>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
