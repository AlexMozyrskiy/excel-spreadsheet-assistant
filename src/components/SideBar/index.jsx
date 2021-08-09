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
          <MenuItem icon={testIcon} title='Side Bar' isActive={true} />
          <MenuItem icon={testIcon} title='Side Bar' isActive={false} />
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
