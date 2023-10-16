import React, { useState, useEffect } from 'react';
import '../App.css';
import { InputTodo } from './InputTodo';
import { IncompleteTodo } from './IncompleteTodo';
import { CompleteTodo } from './CompleteTodo';

function Todo() {
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
    <div className="Todo">
      <InputTodo inputTodo={inputTodo} onChange={onChangeInputTodo} onClick={onClickAddTodo} />
      <IncompleteTodo incompleteTodos={incompleteTodos} onClickComplete={onClickCompleteTodo} onClickDelete={onClickDeleteTodo}/>
      <CompleteTodo completeTodos={completeTodos} onClickRestore={onClickRestoreTodo} />
    </div>
  );
}

export default Todo;
