import React from "react";
import PropTypes from "prop-types";

const Body = props => {
  return (
    <div className="bg-light">
      <div className="body">
        <p className="tx-dark">{props.text}</p>
        <h3 className="tx-dark">These links may be helpful:</h3>
        <ul className="doc-links">
          <li>
            <a href="https://reactjs.org/docs/getting-started.html">
              React Documention
            </a>
          </li>
          <li>
            <a href="https://webpack.js.org/concepts/">Webpack Documention</a>
          </li>
          <li>
            <a href="https://babeljs.io/docs/en/">Babel Documention</a>
          </li>
          <li>
            <a href="https://jestjs.io/docs/en/getting-started">
              Jest Documention
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Body.propTypes = {
  text: PropTypes.string.isRequired
};

export default Body;
