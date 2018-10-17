import React from "react";

const Body = props => {
  return (
    <div className="bg-light">
      <div className="body">
        <p className="tx-dark">{props.text}</p>
      </div>
    </div>
  );
};

export default Body;
