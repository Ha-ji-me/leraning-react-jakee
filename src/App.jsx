import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Todo from './todo/Todo';
import Sidebar from './sidebar/Sidebar';
import { Rendering } from './render/Rendering';

function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [])

  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <Sidebar /> */}
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen} open>表示</button>
      <Rendering open={open} onClick={onClickClose} />
    </div>
  );
}

export default App;
