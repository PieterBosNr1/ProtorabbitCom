import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Button from "../../components/Button"

//import styles from "./index.scss"

const PagePreview = ({ __url, title, date,thumb, description }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div className="page-preview">
      {
        thumb && <img className="thumb" src={thumb} />

      }
      
      <Link to={ __url } className="page-preview__link">
        { title }
      </Link>
      <div className="page-preview__meta">
        {
          pageDate &&
            <time key={ pageDate.toISOString() }>
              { pageDate.toDateString() }
            </time>
        }
      </div>
      <div className="page-preview__description">
        { description }
        { " " }
      </div>
      <Link to={ __url } className="link__button">
        <Button>{ "Read More " }<i className="fa fa-arrow-right"/></Button>
      </Link>
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
   thumb: PropTypes.string,
}

export default PagePreview
