import { INCREMENT, DECREMENT } from '../constant'
// import store from './store'

export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT, data })

// async action, where action is a function but not obj, it normally calls a sync action
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time);
  }
}