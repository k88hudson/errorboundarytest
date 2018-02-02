const React = require("react");

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return React.createElement("h1", null, "Something went wrong.");
    }
    return this.props.children;
  }
}

// Throws an error in the browser, not during server rendering
const Inner = props => {
  if (typeof window !== "undefined") {
    throw new Error("OOPS");
  }
  return React.createElement("main", null, "Hello world");
};

// Renders an Error Boundary with <Inner />
module.exports.Base = class Base extends React.PureComponent {
  render() {
    return React.createElement(ErrorBoundary, null,
      React.createElement(Inner));
  }
};
