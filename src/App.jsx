import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
// import Todo from './todo/Todo';
// import Sidebar from './sidebar/Sidebar';
// import MainRendering from './render/MainRendering';
// import Router from './router/Router';
// import { PrimaryButton } from './components/atoms/button/PrimaryButton';
// import { SecondaryButton } from './components/atoms/button/SecondaryButton';
// import { SearchInput } from './components/molculus/SearchInput';
// import { UserCard } from './components/organisms/user/UserCard';
// import { HeaderOnly } from './components/templates/HeaderOnly';
// import { DefaultLayout } from './components/templates/DefaultLayout';
import AtomicRouter from './atomic-router/AtomicRouter'

function App() {
  // const user = {
  //   image: "https://source.unsplash.com/cjSUZMA2iW8",
  //   name: "ばろほ",
  //   mail: "baroho@gmail.com",
  //   tel: "080-2263-7332",
  //   office: "株式会社ばろほ",
  //   web: "baroho.com",
  // }

  return (
    <AtomicRouter />
    // <BrowserRouter>
      // {/* <DefaultLayout> */}
      //   {/* <Todo /> */}
      //   {/* <Sidebar /> */}
      //   {/* <MainRendering /> */}
      //   {/* <Router /> */}
      //   {/* <PrimaryButton>test</PrimaryButton> */}
      //   {/* <SecondaryButton>test</SecondaryButton> */}
      //   {/* <SearchInput /> */}
      //   {/* <UserCard user={user} /> */}
      // {/* </DefaultLayout> */}
    // </BrowserRouter>
  );
}

export default App;
