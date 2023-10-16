import React from 'react'

export function IncompleteTodo(props) {
  const { incompleteTodos, onClickComplete, onClickDelete} = props;

  const style = {
    areaStyle: {
      backgroundColor: '#c6ffe2',
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
    },
    listLow: {
      display: 'flex',
      alignItems: 'center',
      paddingBottom: '4px',
    }
  }

  return (
    <div style={style.areaStyle}>
        <p style={style.titleStyle}>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((completeTodo, index) => {
            return(
              <div key={ completeTodo } style={style.listLow}>
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