import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputTodo, setInputTodo] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeInputTodo = (e) => {
    setInputTodo(e.target.value);
  }

  const onClickAddTodo = (e) => {
    if (inputTodo === "") return;
    //stateの初期値が配列なら、こちらでも同様に配列を返す必要がある(ただの文字列ではだめ)。
    //単に新たな文字列のみを配列に入れるのではなく、常にすでに配列に存在する値も考慮する必要がある。
    const newTodos = [...incompleteTodos, inputTodo];
    setIncompleteTodos(newTodos);
    setInputTodo('');
  }

  const onClickDeleteTodo = (index) => {
    const newTodos = [...incompleteTodos];
    //指定したindexの要素を配列から削除する
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickCompleteTodo = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickRestoreTodo = (index) => {
    // alert(index);
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <div className="App">
      <div className='input-area'>
        <input value={inputTodo} placeholder='TODOを入力' onChange={onChangeInputTodo}/>
        <button onClick={onClickAddTodo}>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {incompleteTodos.map((completeTodo, index) => {
            return(
              <div key={ completeTodo } className='list-row'>
                <li>{ completeTodo }</li>
                <button onClick={ () => onClickCompleteTodo(index) }>完了</button>
                <button onClick={ () => onClickDeleteTodo(index) }>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {completeTodos.map((completeTodo, index) => {
            return(
              <div key={ completeTodo } className='list-row'>
                <li>{ completeTodo }</li>
                <button onClick={ () => onClickRestoreTodo(index)}>戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
