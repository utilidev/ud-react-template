import React from "react";

const Header = props => {

  return (
    <div className="bg-dark">
        <h1 className="tx-light">{props.text}</h1>
    </div>
  );
};

export default Header;
