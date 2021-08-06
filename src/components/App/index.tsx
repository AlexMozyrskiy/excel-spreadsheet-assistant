import React from 'react';

import { Route, Switch } from "react-router-dom";

import SideBar from '../SideBar';

import st from './index.module.scss';

const App = () => {
  return (
    <div className={st.app}>
      <SideBar />
    </div>
  );
}

export default App;