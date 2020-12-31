import './styles.css'
// import createStore from './createStore'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { rootReducer } from "./my_redux/rootReducer"
// import { DECREMENT, INCREMENT } from "./my_redux/types"
import { asyncIncrement, changeTheme, decrement, increment } from "./my_redux/actions"

const $counter = document.getElementById('counter')
const $addBtn = document.getElementById('add')
const $subBtn = document.getElementById('sub')
const $asyncBtn = document.getElementById('async')
const $themeBtn = document.getElementById('theme')

// Owm middleware - logger
// function logger(state) {
//   return function (next) {
//     return function (action) {
//       console.log('Prev state', state.getState())
//       console.log('Action', action)
//       const newState = next(action)
//       console.log('Prev state', state.getState())
//       return newState
//     }
//   }
// }

// let state = 0  // Счетчик
// const store = createStore(rootReducer, 0)
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )  
)

$addBtn.addEventListener('click', () => {
  // store.dispatch({ type: INCREMENT })
  store.dispatch(increment())
})
$subBtn.addEventListener('click', () => {
  // store.dispatch({ type: DECREMENT })
  store.dispatch(decrement())
})

$asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
  // setTimeout(() => {
  //   store.dispatch(increment())
  // }, 2000)
})

$themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('dark')
    ? 'light'
    : 'dark'
  store.dispatch(changeTheme(newTheme))
})

store.subscribe(() => {
  $counter.textContent = store.getState().counter
  document.body.className = store.getState().theme.value;

  [$addBtn, $subBtn, $themeBtn].forEach(btn => { 
    btn.disabled = store.getState().theme.disabled 
  })
})

store.dispatch({ type: 'APP_INIT' })