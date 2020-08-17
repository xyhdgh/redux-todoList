import { DELETE_TODO, DELETE_ALL_TODOS, FILTER_TODOS } from '../constants'

/**
 * delete todo...
 */
export const delete_todo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
}

/**
 * delete all todos
 */
export const delete_all_todos = () => {
  return {
    type: DELETE_ALL_TODOS
  }
}

/**
 * search todos
 */
export const filter_todos = (search) => {
  return {
    type: FILTER_TODOS,
    payload: {
      search
    }
  }
}