import React , { PropTypes } from "react"
//import { Link } from "phenomic"
//import Svg from "react-svg-inline"

//import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
//import gitHubSvg from "../icons/iconmonstr-github-1.svg"

//import styles from "./index.scss"


const Header = (props) => { 
	
	return (
<div>
<header className="row">
	<div className="small-12 columns logo">
		<img className="logo__img" src="/assets/rabbit/rabbit.svg"/>
		<h1 className="logo__text title title--center">
			<span>Protos</span><span className="title__highlight" >rabbit</span>-<span>[{props.title}]</span>
		</h1>
	</div>
</header>
</div>
)
}

Header.propTypes = {
  children: PropTypes.node,
  head:PropTypes.object,
  title:PropTypes.string
}



export default Header
