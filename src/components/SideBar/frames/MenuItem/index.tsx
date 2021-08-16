import React from 'react';
import { NavLink } from 'react-router-dom';

import SVG from 'react-inlinesvg';
import cn from 'classnames';

import st from './index.module.scss';

interface IMenuItemProps {
  icon: string;
  title: string;
  path: string;
  isSideBarActive: Boolean;
}

/**
 * if typeof title === 'undefined' title is not rendering
 * this is needed to render the navigation in a minimized state,
 * where only icons are shown
 *
 * @param {SVGElement} icon - svg icon
 * @param {String} title - title of menu item
 * @param {String} path - ссылка
 *
 *
 * @returns {JSX}
 */
const MenuItem: React.FC<IMenuItemProps> = ({ icon, title, path, isSideBarActive }) => {
  return (
    <li className={st.menuItem}>
      <NavLink exact to={path} className={st.menuItem__link} activeClassName={st.menuItem__link_active}>
        <figure className={cn(st.menuItem__svgWrapper, !isSideBarActive && st.menuItem__svgWrapper_sidebarNotActive)}>
          <SVG src={icon} />
        </figure>
        {isSideBarActive && <span>{title}</span>}
      </NavLink>
    </li>
  );
};

export default MenuItem;
