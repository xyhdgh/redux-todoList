import style from './style.module.css'
import React, { useState, useCallback } from 'react'
import classNames from 'classnames/bind'
import { useDispatch, useSelector } from 'react-redux'
// import { add_todo } from '../../store/actions/todoAction'

let cx = classNames.bind(style)

const Header = () => {
  const [waitTodos, setWaitTodos] = useState("")
  const [waitTime, setWaitTime] = useState("")
  const [waitDay, setWaitDay] = useState("")
  const dispatch = useDispatch()
  const todoList = useSelector(state => state.todoReducer.dataList)
  const handleChangeTodo = (e) => {
    setWaitTodos(e.target.value)
  }
  const handleChangeTime = (e) => {
    setWaitTime(e.target.value)
  }
  const handleChangeDay = (e) => {
    setWaitDay(e.target.value)
  }
  const handleAdd = useCallback(() => {
    dispatch(add_todo({waitTodos, waitTime, waitDay, id: todoList.length}))
    setWaitTodos("")
    setWaitTime("")
    setWaitDay("")
  }, [dispatch, waitTodos, waitTime, waitDay, todoList])
  return (
    <header className={cx(style['header'])}>
      <input type="text" className={cx(style['input'], "form-control")} placeholder="待办事项" onChange={handleChangeTodo} value={waitTodos}/>
      <input type="date" className={cx(style['input'], "form-control")} value={waitDay} onChange={handleChangeDay}/>
      <input type="text" className={cx(style['input'], "form-control")} placeholder="所需时间" onChange={handleChangeTime} value={waitTime}/>
      <button type="button" className={cx(style['button'], "btn btn-info")} onClick={handleAdd}>ADD</button>
    </header>
  )
}

export default Header
