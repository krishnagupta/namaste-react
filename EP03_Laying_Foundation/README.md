Q.1 How to create script in package.json ?
Q.2 npm start works but not npm build ?

- start is reserved keyword by npm but for build we have to write npm run build

Q.3 JSX is different than HTMl, It is not HTML inside JS. It is HTML like syntax
const jsxHeading = <h1>Namaste React using JSX</h1>
Q.4 attribute in jsx is camelCase like className
Q.5 for multiple line mandatory to use ()
Q.6 class based component & functional component
Q.7 always start with capital letter react functional component
Q.8 root.render(HeadingComponent); - false , root.render(<HeadingComponent/>);- true

- bcz we render react element not functional component

Q.9 component composition - component inside another component
Q.10 can inject any js code inside {}
Q.11 JSX takes care of the injection attack like cross site scripting, while calling api getting malicious data

- It sanitize your data and prevent xss

Q.12 you can call functional component like {FnComp()} inside expression, or <FnComp />
