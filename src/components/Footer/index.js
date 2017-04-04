import React from "react"

//import styles from "./index.scss"

const Footer = () => (
  <footer className="footer">
    <div className="row">
      <div className="columns small-12">
      { /* If you like Phenomic, this is a way to share the love ;) */ }
      <div>
        <a
          href={ process.env.PHENOMIC_HOMEPAGE }
          className="footer__phenomicReference"
        >
          { "Website generated with " }
          <span className="footer__phenomicReferenceName">
            {  `<${ process.env.PHENOMIC_NAME} />` }
          </span>
        </a>
      </div>
      </div>
    </div>
  </footer>
)

export default Footer
