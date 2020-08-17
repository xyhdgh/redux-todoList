import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import asyncReducer from './asyncReducer'

const reducers = combineReducers({
  todoReducer,
  asyncReducer
})

export default reducers