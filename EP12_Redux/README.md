Redux dev tool ext
when button clicked dispatches action which calls reducer fn which updates slice of redux store
we use selector to read data from store which modify react component(subscribing to store)
selector is hook inside react
In latest redux toolit we can mutate the state but not earlier, returning is not mandatory earlier it was
redux toolkit uses immer library to create immutable state internally
RTK Query instead of thunk middleware

# Redux Toolkit

install @redux/toolkit and react-redux
build store
connect store to app
create slice
dispatch action
selector
