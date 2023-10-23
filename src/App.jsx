import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Todo from './todo/Todo';
import Sidebar from './sidebar/Sidebar';
import MainRendering from './render/MainRendering';
import Router from './router/Router';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molculus/SearchInput';

function App() {

  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <Sidebar /> */}
      {/* <MainRendering /> */}
      {/* <Router /> */}
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>test</SecondaryButton>
      <SearchInput />
    </div>
  );
}

export default App;
