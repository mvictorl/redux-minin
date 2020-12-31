import { ASYNC_INC, CHANGE_THEME, DECREMENT, DISABLE_BTN, ENABLE_BTN, INCREMENT } from "./types"

export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}

export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disableBtn())

    // Async action bu Redux-thunk
    // setTimeout(() => {
    //   dispatch({ type: ASYNC_INC })
    //   dispatch(enableBtn())
    // }, 1500)

    const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    wait(1500)
      .then(() => dispatch({ type: ASYNC_INC }))
      .then(() => dispatch(enableBtn()))

    // const prz = new Promise((res, rej) => {
    //   setTimeout(() => {
    //       dispatch({ type: ASYNC_INC })
    //     }, 1500)
    //     return res
    // })
    // prz.then(() => dispatch(enableBtn()))
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}

export function disableBtn() {
  return { type: DISABLE_BTN }
}

export function enableBtn() {
  return { type: ENABLE_BTN }
}