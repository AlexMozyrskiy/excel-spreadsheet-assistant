import React, { Dispatch, SetStateAction } from 'react';

import cn from 'classnames';

import MenuItem from './frames/MenuItem';
import ServiceName from '../common/ServiceName';

import testIcon from './sources/Icon.svg';

import st from './index.module.scss';

interface ISideBarProps {
  isSideBarActive: Boolean;
  setIsSideBarActive: Dispatch<SetStateAction<Boolean>>;
}

/**
 *
 * @param {Boolean} isSideBarActive - свернут или развурнут сайдбар
 * @param {Function} setIsSideBarActive - SetStateAction
 * @returns
 */
const SideBar: React.FC<ISideBarProps> = ({ isSideBarActive, setIsSideBarActive }) => {
  return (
    <div className={st.sideBar}>
      <button
        className={cn(st.sideBar__arrow, !isSideBarActive && st.sideBar__arrow_notActiveSidebar)}
        onClick={() => (isSideBarActive ? setIsSideBarActive(false) : setIsSideBarActive(true))}
      ></button>
      <div className={st.sideBar__serviceNameWrapper}>
        <ServiceName />
      </div>
      <nav>
        <ul>
          <MenuItem icon={testIcon} title='Dashboard' path='/' isSideBarActive={isSideBarActive} />
          <MenuItem icon={testIcon} title='Side Bar' path='/test1' isSideBarActive={isSideBarActive} />
          <MenuItem icon={testIcon} title='Side Bar' path='/test3' isSideBarActive={isSideBarActive} />
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
