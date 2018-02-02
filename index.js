const React = require("react");
const ReactDOM = require("react-dom");
const {Base} = require("./src/Base");

// This is a hydration
ReactDOM.hydrate(React.createElement(Base), document.getElementById("root-prerender"));

// This is a regular render
// ReactDOM.render(React.createElement(Base), document.getElementById("root"));
