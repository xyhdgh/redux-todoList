import { ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from "../constants"

/**
 * add todo request...
 */
export const add_todo_request = (obj) => {
  return {
    type: ADD_TODO_REQUEST,
    payload: obj
  }
}

/**
 * add todo success...
 */
export const add_todo_success = () => {
  return {
    type: ADD_TODO_SUCCESS
  }
}

/**
 * add todo failure
 */
export const add_todo_failure = () => {
  return {
    type: ADD_TODO_FAILURE
  }
}