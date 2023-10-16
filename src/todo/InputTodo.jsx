import React from 'react'

export function InputTodo(props) {
  const { inputTodo, onChange, onClick, disabled } = props;
  const style = {
    backgroundColor: '#c1ffff',
    width: '400px',
    height: '30px',
    borderRadius: '8px',
    padding: '8px',
    margin: '8px',
  }

  return (
    <div style={style}>
        <input id="input" value={inputTodo} placeholder='TODOを入力' onChange={onChange} disabled={disabled}/>
        <button onClick={onClick}>追加</button>
      </div>
  )
}