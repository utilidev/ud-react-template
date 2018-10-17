import React from "react";
import PropTypes from "prop-types";

const Body = props => {

  return (
    <div className="bg-light">
      <div class="body">
        <p className="tx-dark">{props.text}</p>
      </div>
    </div>
  );
};

Body.propTypes = {
  text: PropTypes.string.isRequired
};

export default Body;
