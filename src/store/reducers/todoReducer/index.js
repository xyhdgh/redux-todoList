import {  DELETE_TODO, DELETE_ALL_TODOS, FILTER_TODOS } from '../../constants'

const initialState = {
  dataList: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TODO:
      return {
        ...state,
        dataList: state.dataList.filter((item) => item.id !== action.payload.id)
      }
    case DELETE_ALL_TODOS:
      return {
        ...state,
        dataList: []
      }
    case FILTER_TODOS:
      return {
        ...state,
        dataList: state.dataList.filter(item => item.waitTodos.includes(action.payload.search))
      }
    default:
      return state
  }
}

export default todoReducer