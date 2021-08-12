import React, { useState, useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';
import cn from 'classnames';

import Header from '../Header';
import SideBar from '../SideBar';
import Content from '../Content';

import st from './index.module.scss';

const App = () => {
  const [isSideBarActive, setIsSideBarActive] = useState<Boolean>(false);

  return (
    <div className={cn(st.app, !isSideBarActive && st.app_sideBarNotActive)}>
      <header className={st.app__header}>
        <Header />
      </header>

      <section className={st.app__sideBar}>
        <SideBar isSideBarActive={isSideBarActive} setIsSideBarActive={setIsSideBarActive} />
      </section>

      <main className={st.app__content}>
        <Content />
      </main>
    </div>
  );
};

export default App;
