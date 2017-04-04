import React, { PropTypes } from "react"

import PagePreview from "../PagePreview"

//import styles from "./index.scss"

const PagesList = ({ pages }) => {
  return (
    <div className="pages-list">
      {
      pages.length
      ? (
        <div className="row small-up-2 medium-up-3 large-up-4">
          {
          pages.map((page) => (
            <div className="column column-block" key={ page.title }><PagePreview { ...page } /></div>
          ))
        }
        </div>
      )
      : "No menu yet."
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
