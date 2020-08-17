import React, { useCallback, useState } from 'react'
import style from './footer.module.css'
import classNames from 'classnames/bind'
import { useDispatch, useSelector } from 'react-redux'
import { delete_all_todos, filter_todos } from '../../store/actions/todoAction'

let cx = classNames.bind(style)

const Footer = () => {
  const dispatch = useDispatch()
  const todoList = useSelector(state => state.todoReducer.dataList)
  const [searchContent, setSearchContent] = useState("")
  let sum = 0;
  todoList.forEach((item) => {
    sum += parseInt(item.waitTime)
  })
  const deleteAll = useCallback(() => {
    dispatch(delete_all_todos())
  }, [dispatch])
  const searchAll = useCallback(() => {
    dispatch(filter_todos(searchContent))
  }, [dispatch, searchContent])
  const handleChange = useCallback((e) => {
    setSearchContent(e.target.value)
  }, [])
  return (
    <footer className={cx(style['footer'])}>
      <span>总共用时: {sum}</span>
      <input type="text" className={"form-control"} style={{width: "25%"}} placeholder="搜索你想要的内容" onChange={handleChange} value={searchContent}/>
      <button type="button" className="btn btn-danger" onClick={searchAll}>search</button>
      <button type="button" className="btn btn-danger" onClick={deleteAll}>删除全部</button>
    </footer>
  )
}

export default Footer
