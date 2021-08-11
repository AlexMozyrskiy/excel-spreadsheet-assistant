import React from 'react';
import { NavLink } from 'react-router-dom';

import SVG from 'react-inlinesvg';
import cn from 'classnames';

import st from './index.module.scss';

/**
 * if typeof title === 'undefined' title is not rendering
 * this is needed to render the navigation in a minimized state,
 * where only icons are shown
 *
 * @param {SVGElement} icon - svg icon
 * @param {String} title - title of menu item
 * @param {Boolean} isActive - активна ли MenuItem
 * @param {String} path - ссылка
 *
 *
 * @returns {JSX}
 */
const MenuItem = ({ icon, title, path }) => {
  return (
    <li>
      <NavLink exact to={path} className={st.menuItem} activeClassName={st.menuItem_active}>
        <figure>
          <SVG src={icon} alt='Menu Icon'></SVG>
        </figure>
        {typeof title !== 'undefined' && <span>{title}</span>}
      </NavLink>
    </li>
  );
};

export default MenuItem;
