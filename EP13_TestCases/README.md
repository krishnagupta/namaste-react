# Types of Testing

- Unit Testing
- Integration Testing
- End to End Testing

Dom Testing Library - React Testing Library, uses jest behind the scenes
jest - js testing framework, uses babel
after jest we install babel-jest
and
parcel uses babel inside so conflict
so create babel.config.js to override existing babel conf that parcel has set first
create .parcelrc file to prevent conflict of babel from parcel side

- install react testing library
- install jest
- install babel dependencies
- configure babel
- configure parcel config file to disable default babel transpilation
- jest configuration, npx jest --init->
- install jsdom library
<!-- - (__tests__) folder create, __ called dunder -->
- install @babel/preset-react - to make jsx work in test cases
- include @babel/preset-react inside babel-config file, to convert jsx code to html
- to use tobeinthedocument u have to install @testing-library/jest-dom
- console.log(screen.---) return react element, piece of jsx

- render -- query -- assert
  when we run test that component will render in jsdom
  jest --watch for auto running test cases
  Failing scenario and soltn

- useSelector() => It only understand react, not redux. so include <Provider store={}>
- <Link> => bcz it comes from react-router-dom so wrap with Browserrouter
- jest doesnot understand fetch as it is part of browser so we have to fake it

global.fetch = jest.fn(()=>{
return Promise.resolve({
json: ()=>{
return Promise.resolve(data)
}
})
})

whenever u are using fetch or state update wrap ur render fn with act (react-dom/test-utils)
act fn returns promise-- await act(async ()=> render(<comp>))

- getbytestid data-testid
