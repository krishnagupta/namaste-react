import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "Hello World From React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // take object and converts it to the h1 tag and render in  DOM

const jsxHeading = <h1>Namaste React using JSX</h1>; // It is not pure JS, JS engine doesnot understand
root.render(jsxHeading);
// heading & jsxHeading are same
// It is transpiled before it goes to JS engine, converted to code that browser can understand
// It is done by parcel, but it does by babel internally
// It get converted to react.createelement

// React functional comp - normal JS function which return some jsx/react element
const HeadingComponent = () => {
  return <h1>Namaste React Fn Component</h1>;
};

const root1 = ReactDOm.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
