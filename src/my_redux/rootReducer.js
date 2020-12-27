import { ASYNC_INC, DECREMENT, INCREMENT, CHANGE_THEME } from "./types"
import { combineReducers } from "redux"

function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case ASYNC_INC:
      return state + 5
    // The code below no returning state.
    // Use Redux-thunk & async action (actions.js file)
    // setTimeout(() => {
    //   return state + 5
    // }, 1500)
    default:
      return state
  }
}

function themeReducer(state = { value: null }, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, value: 'dark'}
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})