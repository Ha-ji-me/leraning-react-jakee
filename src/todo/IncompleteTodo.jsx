import React from 'react'

export function IncompleteTodo(props) {
  const { incompleteTodos, onClickComplete, onClickDelete} = props

  return (
    <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((completeTodo, index) => {
            return(
              <div key={ completeTodo } className='list-row'>
                <li>{ completeTodo }</li>
                <button onClick={ () => onClickComplete(index) }>完了</button>
                <button onClick={ () => onClickDelete(index) }>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
  )
}