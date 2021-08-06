import React from "react";

import MenuItem from "./frames/MenuItem";

import testIcon from './sources/Icon.svg';

import st from './index.module.scss';

const SideBar = () => {

    return (
        <div className={st.sideBar}>
            <MenuItem
                icon={testIcon}
                title="Side Bar"
                isActive={true}
            />
            <MenuItem
                icon={testIcon}
                title="Side Bar"
                isActive={false}
            />
        </div>
    );
}

export default SideBar;