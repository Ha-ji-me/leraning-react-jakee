import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Todo />
      {/* <Sidebar /> */}
    </div>
  );
}

export default App;
