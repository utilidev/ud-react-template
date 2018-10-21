 import React from "react";
 import PropTypes from "prop-types";

 const Menu = props => {
    const checkActive = (item, itemActive) => {
      return  (item === itemActive ? "active" : ""); 
    }

    return (
          <nav>
            <ul>
              {props.menuTexts.map(menuItem =>  
               <li key={menuItem} className={checkActive(menuItem, props.menuActive)}><a href="#">{menuItem}</a></li>)
              }
            </ul>
          </nav>
    );
  };
  
  Menu.propTypes = {
    menuTexts: PropTypes.arrayOf(PropTypes.string),
    menuActive: PropTypes.string
  };
  
  export default Menu;
  