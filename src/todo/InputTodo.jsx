import React from 'react'

export function InputTodo(props) {
  const { inputTodo, onChange, onClick } = props;
  return (
    <div className='input-area'>
        <input value={inputTodo} placeholder='TODOを入力' onChange={onChange}/>
        <button onClick={onClick}>追加</button>
      </div>
  )
}