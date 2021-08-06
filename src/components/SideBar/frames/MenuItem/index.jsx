import React from "react";

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
 * 
 * @returns {JSX}
 */
const MenuItem = ({ icon, title, isActive }) => {
    
    return(
        <div className={cn(st.menuItem, isActive && st.menuItem_active)}>
            <figure><SVG src={icon} alt='Menu Icon'></SVG></figure>
            <span>{typeof title !== 'undefined' && title}</span>
        </div>
    );
}

export default MenuItem;