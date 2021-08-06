import React from "react";

import st from './index.module.scss';

/**
 * if typeof title === 'undefined' title is not rendering
 * this is needed to render the navigation in a minimized state,
 * where only icons are shown
 * 
 * @param {SVGElement} icon - svg icon
 * @param {String} title - title of menu item
 * 
 * @returns {JSX}
 */
const MenuItem = ({ icon, title }) => {
    return(
        <div className={st.menuItem}>{typeof title !== 'undefined' && title}</div>
    );
}

export default MenuItem;