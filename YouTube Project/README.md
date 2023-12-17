# Steps for youtube design

- Requirements clarifications
- Features
- Tech stack (redux, tailwind, parcel/webpack bundler, testing library)

# Youtube

- debouncing (diff betwn key stroke /typing slow & fast)
- debouncing with 200ms means if diff betwn 2 key strokes is < 200ms decline api call

# build n level nested comments

- In youtube it is 2 level

comment recursing with comment.replies, n level testing
caching, youtube search, debouncing, nested comments
live chat >>>>>>>>>>> infinite scroll >>>>>>>>>>>>>>> pagination

data layer

- web sockets (in both way)zerodha
- API Polling (server to ui)crickbuzz, youtube for coments live

ui layer

unshift topush first
flex colun reverse
splice 1 after 10

---

beta.reacts.org
useMemo - cache the result of a calculation between re-render, nth prime number after 7 digit, freeze the page
useCallback - caching the fn definition between re-renders
useRef - reference a value that is not needed for re-rendering
