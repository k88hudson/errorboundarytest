const {renderToString} = require("react-dom/server");
const {Base} = require("./src/Base");
const React = require("react");

const els = renderToString(React.createElement(Base));

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Error Boundary Test</title>
</head>
<body>
  <div id="root"></div>
  <div id="root-prerender">${els}</div>
  <script src="./index.js"></script>
</body>
</html>
`;

process.stdout.write(html);
