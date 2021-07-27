/*combine all reducers*/
import { combineReducers } from "redux"

import sum from "./sum"
import persons from "./person"

export default combineReducers({
  sum,
  persons,
})