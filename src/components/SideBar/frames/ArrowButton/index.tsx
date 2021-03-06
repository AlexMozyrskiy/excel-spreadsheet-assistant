import React, { Dispatch, SetStateAction } from 'react';

import cn from 'classnames';

import st from './index.module.scss';

export interface IArrowButtonProps {
  isSideBarActive: Boolean;
  setIsSideBarActive: Dispatch<SetStateAction<Boolean>>;
}

/**
 *
 * @param {Boolean} isSideBarActive - свернут или развурнут сайдбар
 * @param {Function} setIsSideBarActive - SetStateAction
 * @returns
 */
const ArrowButton: React.FC<IArrowButtonProps> = ({ isSideBarActive, setIsSideBarActive }) => {
  return (
    <div className={st.arrow__wrapper}>
      <button
        className={cn(st.arrow, !isSideBarActive && st.arrow_notActiveSidebar)}
        onClick={() => (isSideBarActive ? setIsSideBarActive(false) : setIsSideBarActive(true))}
      ></button>
    </div>
  );
};

export default ArrowButton;
