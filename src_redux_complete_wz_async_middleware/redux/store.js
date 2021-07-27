import {createStore, applyMiddleware} from 'redux'
import sumReducer from './sum_reducer'
import thunk from 'redux-thunk'

export default createStore(sumReducer, applyMiddleware(thunk))