
const initState = 0

export default function sumReducer(prevState=initState, action){
  const {type,data} = action
  switch (type) {
    case 'increment':
      return prevState + data
    case 'decrement':
      return prevState - data  
    default:
      return prevState
  }
}