import React from 'react'

export function CompleteTodo(props) {
  const { completeTodos, onClickRestore } = props;
  const style = {
    areaStyle: {
      backgroundColor: '#ffffe0',
      width: '400px',
      minHeight: '200px',
      padding: '8px',
      margin: '8px',
      borderRadius: '8px',
    },
    titleStyle: {
      textAlign: 'center',
      marginTop: 0,
      fontWeight: 'bold',
      color: '#666',
    }
  }

  return (
    <div style={style.areaStyle}>
        <p style={style.titleStyle}>完了のTODO</p>
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