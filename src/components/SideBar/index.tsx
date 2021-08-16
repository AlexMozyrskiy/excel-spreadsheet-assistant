import React, { Dispatch, SetStateAction } from 'react';

import cn from 'classnames';

import MenuItem from './frames/MenuItem';
import ServiceName from '../common/ServiceName';
import ArrowButton from './frames/ArrowButton';
import Slogan from './frames/Slogan';

import testIcon from './sources/Icon.svg';
import downloadIcon from './sources/download.svg';

import st from './index.module.scss';

interface ISideBarProps {
  isSideBarActive: Boolean;
  setIsSideBarActive: Dispatch<SetStateAction<Boolean>>;
}

/**
 *
 * @param {Boolean} isSideBarActive - свернут или развурнут сайдбар
 * @param {Function} setIsSideBarActive - SetStateAction
 * @returns {JSX}
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
          <MenuItem icon={downloadIcon} title='Загрузить файл' path='/upload' isSideBarActive={isSideBarActive} />
          <MenuItem icon={testIcon} title='Side Bar' path='/test3' isSideBarActive={isSideBarActive} />
        </ul>
      </nav>

      <Slogan
        isSideBarActive={isSideBarActive}
        sloganText='Какой-то тестовй текст. Это тестовый текст, потом тут бедт какая-либо важная информация.'
      />
    </div>
  );
};

export default SideBar;
