import React, { Dispatch, SetStateAction } from 'react';

import cn from 'classnames';

import MenuItem from './frames/MenuItem';
import ServiceName from '../common/ServiceName';

import testIcon from './sources/Icon.svg';

import st from './index.module.scss';
import ArrowButton from './frames/ArrowButton';

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
      <ArrowButton isSideBarActive={isSideBarActive} setIsSideBarActive={setIsSideBarActive} />

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

      <div className={st.sideBar__slogan__wrapper}>
        {isSideBarActive && <article className={st.sideBar__slogan}>Test</article>}
      </div>
    </div>
  );
};

export default SideBar;
