import React from 'react'

export function CompleteTodo(props) {
  const { completeTodos, onClickRestore } = props;

  return (
    <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map((completeTodo, index) => {
            return(
              <div key={ completeTodo } className='list-row'>
                <li>{ completeTodo }</li>
                <button onClick={ () => onClickRestore(index)}>戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
  )
}