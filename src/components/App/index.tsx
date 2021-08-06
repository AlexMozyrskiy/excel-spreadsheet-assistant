import React, { useState } from 'react';

import { Route, Switch } from "react-router-dom";
import cn from 'classnames';

import Header from '../Header';
import SideBar from '../SideBar';
import Content from '../Content';

import st from './index.module.scss';

const App = () => {
  const [isSideBarActive, setIsSideBarActive] = useState(true);

  return (
    <div className={cn(st.app, !isSideBarActive && st.app__sidebar_notActive)}>
      <header className={st.app__header}><Header /></header>
      <section className={st.app__sideBar}><SideBar /></section>
      <main className={st.app__content}><Content /></main>
    </div>
  );
}

export default App;