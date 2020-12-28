import { ASYNC_INC, CHANGE_THEME, DECREMENT, INCREMENT } from "./types"

export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}

export function asyncIncrement() {
  return function (dispatch) {
    // Async action bu Redux-thunk
    setTimeout(() => {
      dispatch({ type: ASYNC_INC })
    }, 1500)
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}