import { INCREMENT, DECREMENT } from './constant'
// import store from './store'

export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

// async action, where action is a function but not obj, it normally calls a sync action
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time);
  }
}