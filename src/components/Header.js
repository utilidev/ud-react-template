import React from "react";
import PropTypes from "prop-types";
import Menu from "./Menu.js";

const Header = props => {

  return (
    <div className="bg-dark">
        <h1 className="tx-light left">{props.text}</h1>
        <Menu menuTexts={["Home","Content","About"]} menuActive={"Home"}/>
    </div>
  );
};

Header.PropTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
