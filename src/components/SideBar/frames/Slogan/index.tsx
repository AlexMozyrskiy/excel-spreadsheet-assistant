import React from 'react';

import st from './index.module.scss';

interface ISloganBarProps {
  isSideBarActive: Boolean;
  sloganText: string;
}

/**
 *
 * @param {Boolean} isSideBarActive - свернут или развурнут сайдбар
 * @param {string} sloganText - текст с информацией
 * @returns {JSX}
 */
const Slogan: React.FC<ISloganBarProps> = ({ isSideBarActive, sloganText }) => {
  return (
    <div className={st.slogan__wrapper}>{isSideBarActive && <article className={st.slogan}>{sloganText}</article>}</div>
  );
};

export default Slogan;
