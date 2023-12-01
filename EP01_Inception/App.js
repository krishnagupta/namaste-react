const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "abc",
  },
  "Hello World From React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // take object and converts it to the h1 tag and render in  DOM

// {} is place which provides attributes to tag
// heading is type of react element which is at the end javascript object
//props are children which will go inside h1 tag
// tag attributes children as params of createElement

// How to create nested element in React ?
{
  /* <div id="parent">
  <div id="child">
    <h1>inside h1 tag</h1>
  </div>
</div>; */
}

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement(
    "div",
    {id: "child"},
    React.createElement("h1", {}, "inside h1 tag")
  )
);

// How to create multiple sibling as children in React ?
{
  /* <div id="parent">
    <div id="child">
      <h1>inside h1 tag</h1>
      <h1>inside h1 tag 2</h1>
    </div>
  </div>; */
}

const parentWithMultipleChildren = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement("div", {id: "child"}, [
    React.createElement("h1", {}, "inside h1 tag"),
    React.createElement("h1", {}, "inside h1 tag 2"),
  ])
);

// that's why jsx comes in picture as code becomes complex
