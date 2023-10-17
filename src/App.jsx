import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Todo from './todo/Todo';
import Sidebar from './sidebar/Sidebar';
import MainRendering from './render/MainRendering';

function App() {

  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <Sidebar /> */}
      <MainRendering />
    </div>
  );
}

export default App;
