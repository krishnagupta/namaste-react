monolith and microservice architechture
2 ways of api call

- load->api->render(page froze for few sec)
- load->render->api(better ux approach, but render twice after api call but react loads fast so ok)

useEffect

- it's callback fn get called after render

Q. Why Cors

- browser blocks api from one origin to another origin req like from localhost to swiggy
- to resolve install cors chrome extension

Q. Optional chaining

Q. Spinning Loader

Q. Shimmer Ui Instead of loader

Q. why usestate ? why not with let/const

- show example of login/logout, on btn click text should change
- answer is bcz of rerender
  Q. What happens when we update variable using set...?
- react creates new variable and update it then render whole component meand that function
- setData call function/component and update vale and render but with diff algo and only changed part of code gets rerendered
  that's why we nees usestate

  every time login button is clicked

  - reconciliation process is triggered
  - react compares old with new virtual dom
  - only update changed part

\*\* Whenever state variable update, react triggers a reconciliation cycle(re-render the component)
but it updates only changed value
