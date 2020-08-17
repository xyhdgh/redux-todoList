import { ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from '../../constants'
let initailState = {}

const asyncReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return {
        ...state
      }
    case ADD_TODO_SUCCESS:
      return {
        ...state
      }
    case ADD_TODO_FAILURE:
      return {
        ...state
      }
    default:
      return state
  }
}

export default asyncReducer