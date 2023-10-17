import React,  { useState, useCallback } from 'react'
import { Rendering } from './Rendering';

function MainRendering(props) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [])

  return (
    <div>
      <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen} open>表示</button>
        <Rendering open={open} onClick={onClickClose} />
    </div>
  )
}

export default MainRendering