import React from "react";
import PropTypes from "prop-types";

const Header = props => {

  return (
    <div className="bg-dark">
        <h1 className="tx-light">{props.text}</h1>
    </div>
  );
};

Header.PropTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
