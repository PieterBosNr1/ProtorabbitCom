import React, {PropTypes} from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"


//import { Link } from "phenomic"
import { Link } from 'react-router';

const Menu = (props, { collection }) => {
  const menuitems = enhanceCollection(collection, {
    filter: { 
      menu: "Y"}
  }).sort((a,b) => (a.order > b.order));


 /* needSort.sort(function(a,b){
  return order.indexOf(a.id) < order.indexOf(b.id) ? -1 : 1;
});*/

  
 

  return (
    <div className="row collapse sticky-top">
      <div className="medium-12 columns ">
      {
      menuitems.length
      ? (
        <ul className="menu">
          {
          menuitems.map((page) => (
            <li className="menu__item" key={ page.__url }>
             <Link  activeClassName="active"  to={page.__url}>{page.menuName}
            </Link>
            </li>
          ))
        }
        </ul>
      )
      : "No menu yet."
    }
      </div>
    </div>
   
  )
}



Menu.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Menu
