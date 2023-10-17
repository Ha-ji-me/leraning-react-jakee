import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Todo from './todo/Todo';
import Sidebar from './sidebar/Sidebar';
import MainRendering from './render/MainRendering';
import Router from './router/Router';

function App() {

  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <Sidebar /> */}
      {/* <MainRendering /> */}
      <Router />
    </div>
  );
}

export default App;
