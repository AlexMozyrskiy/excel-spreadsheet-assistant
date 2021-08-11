import React from 'react';

import MenuItem from './frames/MenuItem';
import ServiceName from '../common/ServiceName';

import testIcon from './sources/Icon.svg';

import st from './index.module.scss';

const SideBar = () => {
  return (
    <div className={st.sideBar}>
      <div className={st.sideBar__serviceNameWrapper}>
        <ServiceName />
      </div>
      <nav>
        <ul>
          <MenuItem icon={testIcon} title='Side Bar' path='/' />
          <MenuItem icon={testIcon} title='Side Bar' path='/test1' />
          <MenuItem icon={testIcon} title='Side Bar' path='/test3' />
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
