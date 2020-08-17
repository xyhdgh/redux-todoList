import React, { useCallback } from 'react'
import style from './style.module.css'
import classNames from 'classnames/bind'
import { useSelector, useDispatch } from 'react-redux'
import { delete_todo } from '../../store/actions/todoAction'

let cx = classNames.bind(style)

const Table = () => {
  let todoList = useSelector(state => state.todoReducer.dataList)
  const dispatch = useDispatch()
  const handleDelete = useCallback((id) => {
    dispatch(delete_todo(id))
  }, [dispatch])
  return (
    <table className={cx('table')}>
      <thead className={cx('thead-dark')}>
        <tr>
          <th scope="col">#</th>
          <th scope="col">待办事项</th>
          <th scope="col">待办时间</th>
          <th scope="col">所需时间</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                {item.id}
              </td>
              <td>{item.waitTodos}</td>
              <td>{item.waitTime}</td>
              <td>{item.waitDay}</td>
              <td>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.id)}>删除</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
