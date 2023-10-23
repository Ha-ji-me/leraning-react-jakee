import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Todo from './todo/Todo';
import Sidebar from './sidebar/Sidebar';
import MainRendering from './render/MainRendering';
import Router from './router/Router';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molculus/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

function App() {
  const user = {
    image: "https://source.unsplash.com/cjSUZMA2iW8",
    name: "ばろほ",
    mail: "baroho@gmail.com",
    tel: "080-2263-7332",
    office: "株式会社ばろほ",
    web: "baroho.com",
  }

  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <Sidebar /> */}
      {/* <MainRendering /> */}
      {/* <Router /> */}
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>test</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

export default App;
