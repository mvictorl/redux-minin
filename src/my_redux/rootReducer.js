import { ASYNC_INC, DECREMENT, INCREMENT, CHANGE_THEME, DISABLE_BTN, ENABLE_BTN } from "./types"
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

const initialState = {
  value: 'light',
  disabled: false
}

function themeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, value: action.payload}
    case DISABLE_BTN:
      return {...state, disabled: true}
    case ENABLE_BTN:
      return {...state, disabled: false}
    default:
      return state
  }
}

// function btnActionReducer(state = true, action) {
//   switch (action.type) {
//     case DISABLE_BTN:
//       return state = true
//     case ENABLE_BTN:
//       return state = false
//     default:
//       return state
//   }
// }

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  // btnActive: btnActionReducer
})